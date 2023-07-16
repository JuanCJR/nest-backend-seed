import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponsePaginated } from './decorators/ApiOkResponsePaginated';
import { GenericInterface } from './interfaces/generic.interfaces';
import { ApiOkResponse } from '@nestjs/swagger';
import {
  CreateGenericDataDto,
  GetGenericDataDto,
  GetPaginatedGenericDataDto,
  UpdateGenericDataDto
} from './dtos/generic.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponsePaginated(GenericInterface)
  @Get()
  async find(@Query() queryParams: GetPaginatedGenericDataDto) {
    return await this.appService.find(queryParams);
  }

  @ApiOkResponse({ type: GenericInterface })
  @Get(':id')
  async findOne(@Param() params: GetGenericDataDto) {
    return await this.appService.findOne(params);
  }

  @ApiOkResponse({ type: GenericInterface })
  @Post()
  async create(@Body() payload: CreateGenericDataDto) {
    return await this.appService.create(payload);
  }

  @ApiOkResponse({ type: GenericInterface })
  @Put(':id')
  async update(
    @Param() params: GetGenericDataDto,
    @Body() payload: UpdateGenericDataDto
  ) {
    return this.appService.update(params, payload);
  }

  @Delete(':id')
  async delete(@Param() params: GetGenericDataDto) {
    return this.appService.delete(params);
  }
}
