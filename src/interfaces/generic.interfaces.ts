import { ApiProperty } from '@nestjs/swagger';

export class GenericInterface {
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
