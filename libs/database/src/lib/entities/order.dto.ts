import { ICreateOrderDto, IID } from '@mdtx/common';
import {
  Exclude,
  IDObjectProperty,
  NumberTransformer,
  PartialType,
  Property,
} from '@mdtx/core';

@Exclude()
export class CreateOrderDto implements ICreateOrderDto {
  @Property({ type: 'number', minimum: 1 }) quantity!: number;
  @Property({ type: 'number' })
  @NumberTransformer()
  salePrice!: number;

  @Property({ type: 'number' })
  @NumberTransformer()
  saleSubtotal!: number;

  @Property({ type: 'number' })
  @NumberTransformer()
  saleTotal!: number;

  @IDObjectProperty({ required: true }) sku!: IID;
  @IDObjectProperty({ required: true }) cart!: IID;
  @IDObjectProperty({ required: true }) priceLevel!: IID;
}

@Exclude()
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
