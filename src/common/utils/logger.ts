import { ConsoleLogger } from '@nestjs/common';
import config from '../../config';
import Winston, { format, transports, createLogger } from 'winston';
import { ConfigType } from '@nestjs/config';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
export class LoggerWinston extends ConsoleLogger {
  logger: Winston.Logger;
  configService: ConfigType<typeof config>;

  constructor() {
    super();
    const transport = new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.ms(),
        nestWinstonModuleUtilities.format.nestLike('configuration-adapter', {
          colors: true,
          prettyPrint: true
        })
      )
    });
    this.logger = createLogger({
      transports: [
        transport,
        new transports.File({ filename: 'error.log', level: 'error' })
      ]
    });
  }

  now(): number {
    const now = new Date();
    return now.getTime();
  }

  log(message: any, ctx: string): void {
    if (typeof message === 'string') {
      this.logger.info({
        message,
        time: this.now(),
        loggerName: ctx
      });
    } else {
      this.logger.info({
        ...message,
        time: this.now(),
        loggerName: ctx
      });
    }
  }

  debug(message: any, context?: string) {
    if (typeof message === 'string') {
      this.logger.debug({
        message,
        time: this.now(),
        loggerName: context
      });
    } else {
      this.logger.debug({
        ...message,
        time: this.now(),
        loggerName: context
      });
    }
  }

  error(message: any, trace?: string, ctx?: string): void {
    if (typeof message === 'string') {
      this.logger.error({
        message,
        time: this.now(),
        loggerName: ctx,
        trace
      });
    } else {
      this.logger.error({
        ...message,
        time: this.now(),
        loggerName: ctx
      });
    }
  }

  writeLog(level: string, body: any): void {
    this.logger.log(level, body);
  }
}
