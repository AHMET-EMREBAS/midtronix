// CreateTemplateDto

import {
  Exclude,
  PaginatorDto,
  PartialType,
  Property,
  SearchTransformer,
  SortTransformer,
  FindOptionsWhere,
  FindOptionsOrder,
} from '@mdtx/core';
import {
  ICreateTemplateDto,
  ITemplateView,
  IUpdateTemplateDto,
} from '@mdtx/interface';

@Exclude()
export class CreateTemplateDto implements ICreateTemplateDto {
  @Property({ type: 'string' })
  name!: string;
}
@Exclude()
export class UpdateTemplateDto
  extends PartialType(CreateTemplateDto)
  implements IUpdateTemplateDto {}

@Exclude()
export class QueryTemplateDto extends PaginatorDto {
  @Property({ type: 'string', noValidate: true })
  @SearchTransformer<ITemplateView>([
    'id',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'templateId',
    'name',
  ])
  where?: FindOptionsWhere<ITemplateView>;

  @Property({ type: 'string', noValidate: true })
  @SortTransformer<ITemplateView>([
    'id',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'templateId',
    'name',
  ])
  order?: FindOptionsOrder<ITemplateView>;
}
