import { ApiProperty } from '@nestjs/swagger';

/**
 * Default health class
 */
export class Health {
  @ApiProperty()
  status: string;
}
