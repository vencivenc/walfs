import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { HttpExceptionFilter } from './logging/http-exception.filter';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(MainModule, {
    bodyParser: false,
  });
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);

  const rawBodyBuffer = (req, res, buf, encoding) => {
    if (buf && buf.length) {
      req.rawBody = buf.toString(encoding || 'utf8');
    }
  };

  app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
  app.use(bodyParser.json({ verify: rawBodyBuffer }));

  app.setGlobalPrefix('api');
  app.useLogger(logger);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  if (process.env.PROD !== 'true') {
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    });
  }

  const host = process.env.HOST || '0.0.0.0';
  const port = process.env.PORT || '9001';

  await app.listen(port, host);
  logger.log(`Application started at ${host}:${port}`);
}
bootstrap();
