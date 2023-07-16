import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationsDto {
  @ApiPropertyOptional({ required: false, example: 8 })
  @IsNumber()
  @IsOptional()
  limit: number;
  @ApiProperty({ example: 0 })
  @IsNumber()
  offset: number;
  @ApiPropertyOptional({ required: false, example: '20221211' })
  @IsNumber()
  @IsOptional()
  untilDate: number;
  @ApiPropertyOptional({ required: false, example: '20221210' })
  @IsNumber()
  @IsOptional()
  fromDate: number;
}
