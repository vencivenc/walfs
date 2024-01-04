import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const request = context.switchToHttp().getRequest();
        const { method: requestMethod, originalUrl: requestUrl } = request;

        if (
          ['/api/app/health', '/api/app/version'].indexOf(requestUrl) !== -1
        ) {
          return;
        }

        const { statusCode: status } = response;
        const responseTime = Date.now() - request['requestStartTime'];
        const requestId = request['requestId'];

        if (requestId) {
          response.setHeader('X-Request-Id', requestId);
        }

        this.logger.log({
          requestMethod,
          requestUrl,
          responseTime,
          requestId,
          status,
        });
      }),
    );
  }
}
