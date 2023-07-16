import { BadRequestException, Injectable } from '@nestjs/common';
import { GenericEntity } from './entities/generic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { PageMetaDto } from '@common/dtos/page-meta.dto';
import { PageDto } from '@common/dtos/page.dto';
import {
  CreateGenericDataDto,
  GetGenericDataDto,
  GetPaginatedGenericDataDto,
  UpdateGenericDataDto
} from './dtos/generic.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(GenericEntity)
    private genericRepository: Repository<GenericEntity>
  ) {}

  async find(
    queryParams: GetPaginatedGenericDataDto
  ): Promise<PageDto<GenericEntity>> {
    const { order, take, page } = queryParams;
    const [userData, itemCount] = await this.genericRepository.findAndCount({
      order: { id: order },
      skip: (page - 1) * take,
      take: take
    });

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto: queryParams
    });

    return {
      data: userData,
      meta: pageMetaDto
    };
  }

  async findOne({ id }: GetGenericDataDto): Promise<GenericEntity> {
    const genericData: GenericEntity = await this.genericRepository.findOne({
      where: { id }
    });

    !genericData && new BadRequestException('Generic data not found');

    return genericData;
  }

  async create(payload: CreateGenericDataDto): Promise<GenericEntity> {
    const newGenericData: GenericEntity =
      this.genericRepository.create(payload);

    return await this.genericRepository.save(newGenericData);
  }

  async update(
    params: GetGenericDataDto,
    payload: UpdateGenericDataDto
  ): Promise<GenericEntity> {
    const genericData: GenericEntity = await this.findOne(params);

    const uptatedData = this.genericRepository.merge(genericData, payload);

    return await this.genericRepository.save(uptatedData);
  }

  async delete(params: GetGenericDataDto): Promise<DeleteResult> {
    const genericData: GenericEntity = await this.findOne(params);

    return await this.genericRepository.delete({ id: genericData.id });
  }
}
