import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealthCheck() {
    const genericResponse: { data: { status: string } } = {
      data: { status: 'OK' }
    };
    return genericResponse.data;
  }
}
