import {
  Exclude,
  Property,
  Transform,
  UnprocessableEntityException,
  Like,
} from '@mdtx/core';
import { SkuView } from './product.view';

@Exclude()
export class QueryPosItemDto
  implements Pick<SkuView, 'barcode' | 'storeId' | 'priceLevelId'>
{
  @Property({ type: 'string', noValidate: true })
  @Transform(({ value }) => {
    if (value && typeof value === 'string') {
      return Like(value);
    }
    throw new UnprocessableEntityException('Bad Request');
  })
  barcode!: string;

  @Property({ type: 'string', noValidate: true })
  @Transform(({ value }) => {
    if (value && typeof value === 'string') {
      return Like(value);
    }
    throw new UnprocessableEntityException('Bad Request');
  })
  storeId!: number;

  @Property({ type: 'string', noValidate: true })
  @Transform(({ value }) => {
    if (value && typeof value === 'string') {
      return Like(value);
    }

    throw new UnprocessableEntityException('Bad Request');
  })
  priceLevelId!: number;
}
