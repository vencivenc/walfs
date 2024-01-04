import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { FlakeService } from '../flake/service/flake.service';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(private readonly flakeService: FlakeService) {}

  private readonly logger = new Logger(LoggingMiddleware.name);

  async use(request: any, response: any, next: () => void) {
    const {
      method: requestMethod,
      originalUrl: requestUrl,
      body,
      rawBody,
    } = request;

    if (['/api/app/health', '/api/app/version'].indexOf(requestUrl) !== -1) {
      next();
      return;
    }

    const remoteIp =
      request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    const now = Date.now();
    const userAgent = request.get('user-agent') || '';
    const protocol = request.protocol;
    const referrer = request.headers.referrer || '';
    const requestId = this.flakeService.generateId();

    request['requestId'] = requestId;
    request['requestStartTime'] = now;

    this.logger.log({
      requestMethod,
      requestUrl,
      requestId,
      userAgent,
      remoteIp,
      referrer,
      protocol,
      rawBody,
      body,
    });

    next();
  }
}
