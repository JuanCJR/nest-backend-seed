import { ApiProperty } from '@nestjs/swagger';

export class ErrorDefault {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  error: string;
}
