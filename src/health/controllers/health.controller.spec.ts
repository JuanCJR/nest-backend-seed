import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from '../services/health.service';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService]
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get health check OK', async () => {
    const responseMock = { status: 'OK' };
    const healthCheck = controller.getHealthCheck();
    expect(healthCheck).toEqual(responseMock);
  });
});
