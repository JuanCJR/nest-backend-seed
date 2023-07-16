import { PageOptionsDto } from '../dtos/page.dto';

export interface PageMetaDtoParameters {
  pageOptionsDto: Partial<PageOptionsDto>;
  itemCount: number;
}
