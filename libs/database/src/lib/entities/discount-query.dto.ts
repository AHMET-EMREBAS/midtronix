import {
  Exclude,
  NumberTransformer,
  Property,
  QueryProperty,
} from '@mdtx/core';

@Exclude()
export class QueryDiscountDto {
  @Property({ type: 'number' }) @NumberTransformer() skuId!: number;
  @QueryProperty() name!: string;
}
