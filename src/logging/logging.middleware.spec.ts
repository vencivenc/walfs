import { LoggingMiddleware } from './logging.middleware';

describe('LoggingMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggingMiddleware(null)).toBeDefined();
  });
});
