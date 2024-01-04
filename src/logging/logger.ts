import { Logger as BaseLogger } from '@nestjs/common';

export class Logger extends BaseLogger {
  error(message: any, request?: any) {
    const requestId = request ? request['requestId'] : null;

    if (typeof message === 'string') {
      message = new Error(message);
    }

    super.error({
      stack: message.stack,
      code: message.code,
      message: message.message,
      requestId,
    });
  }
}
