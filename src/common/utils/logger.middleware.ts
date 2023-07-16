import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';
    res.on('finish', () => {
      const { statusCode } = res;
      const contentLenght = res.get('content-length');

      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLenght} - ${userAgent} ${ip} - headers: ${JSON.stringify(
          req.headers
        )}`
      );
    });
    next();
  }
}
