import { Exclude, PartialType, Property } from '@mdtx/core';
import { SkuView } from './product.view';

@Exclude()
export class QueryPosItemDto
  implements Pick<SkuView, 'barcode' | 'storeId' | 'priceLevelId'>
{
  @Property({ type: 'string', required: true })
  barcode!: string;

  @Property({ type: 'string', required: true })
  storeId!: number;

  @Property({ type: 'string', required: true })
  priceLevelId!: number;
}

@Exclude()
export class PartialQueryPosItemDto extends PartialType(QueryPosItemDto) {}
