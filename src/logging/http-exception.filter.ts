import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(Error)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = 400;
    if (exception instanceof HttpException) {
      status = exception && exception.getStatus();
    }
    let logData;
    let data;
    if (exception instanceof HttpException) {
      logData = data = exception && exception.getResponse();
    } else {
      const requestId = exception['requestId'] || undefined;
      data = {
        message: exception.message,
        requestId,
      };
      logData = {
        message: exception.message,
        stack: exception.stack,
        name: exception.name,
      };
    }

    const { method: requestMethod, originalUrl: requestUrl } = request;
    const responseTime = Date.now() - request['requestStartTime'];
    const requestId = request['requestId'];

    if (requestId) {
      response.setHeader('X-Request-Id', requestId);
    }

    this.logger.error({
      data: logData,
      body: request.body,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      rawBody: request.rawBody,
      requestMethod,
      requestUrl,
      responseTime,
      requestId,
      status,
    });

    response.status(status).json({
      timestamp: new Date().toISOString(),
      status,
      data,
    });
  }
}
