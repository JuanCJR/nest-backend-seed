import { MiddlewareConsumer, Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import config from './config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { LoggerMiddleware } from '@common/utils/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenericEntity } from './entities/generic.entity';
import { HealthController } from './health/controllers/health.controller';
import { HealthService } from './health/services/health.service';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true
    }),
    DatabaseModule,
    TypeOrmModule.forFeature([GenericEntity])
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
