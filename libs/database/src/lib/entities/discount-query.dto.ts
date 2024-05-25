import { Exclude, NumberTransformer, Property } from '@mdtx/core';

@Exclude()
export class QueryDiscountDto {
  @Property({ type: 'number' }) @NumberTransformer() skuId!: number;
}
