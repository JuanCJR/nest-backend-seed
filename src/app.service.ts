import { BadRequestException, Injectable } from '@nestjs/common';
import { GenericEntity } from './entities/generic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { PageMetaDto } from '@common/dtos/page-meta.dto';
import { PageDto } from '@common/dtos/page.dto';
import {
  CreateGenericDataDto,
  GetGenericDataDto,
  GetGenericsDataDto,
  UpdateGenericDataDto
} from './dtos/generic.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(GenericEntity)
    private genericRepository: Repository<GenericEntity>
  ) {}

  async find(queryParams: GetGenericsDataDto): Promise<PageDto<GenericEntity>> {
    const { order, take, page } = queryParams;
    const [data, itemCount] = await this.genericRepository.findAndCount({
      order: { id: order },
      skip: (page - 1) * take,
      take: take
    });

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto: queryParams
    });

    return {
      data: data,
      meta: pageMetaDto
    };
  }

  async findOne({ id }: GetGenericDataDto): Promise<GenericEntity> {
    const data: GenericEntity = await this.genericRepository.findOne({
      where: { id }
    });

    !data && new BadRequestException('Generic data not found');

    return data;
  }

  async create(payload: CreateGenericDataDto): Promise<GenericEntity> {
    const newData: GenericEntity = this.genericRepository.create(payload);

    return await this.genericRepository.save(newData);
  }

  async update(
    params: GetGenericDataDto,
    payload: UpdateGenericDataDto
  ): Promise<GenericEntity> {
    const data: GenericEntity = await this.findOne(params);

    const uptatedData = this.genericRepository.merge(data, payload);

    return await this.genericRepository.save(uptatedData);
  }

  async delete(params: GetGenericDataDto): Promise<DeleteResult> {
    const data: GenericEntity = await this.findOne(params);

    return await this.genericRepository.delete({ id: data.id });
  }
}
