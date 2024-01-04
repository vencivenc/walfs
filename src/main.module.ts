import * as winston from 'winston';
import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { FlakeModule } from './flake/flake.module';
import { WinstonModule } from 'nest-winston';
import { ConfigModule } from './config/config.module';
import { LoggingMiddleware } from './logging/logging.middleware';

@Module({
  imports: [
    ConfigModule,
    AppModule,
    FlakeModule,
    WinstonModule.forRoot({
      transports: [new winston.transports.Console()],
    }),
  ],
})
export class MainModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
