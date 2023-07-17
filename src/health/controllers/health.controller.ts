import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthService } from '../services/health.service';

@ApiTags('Healthchecks')
@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  getHealthCheck() {
    return this.healthService.getHealthCheck();
  }
}
