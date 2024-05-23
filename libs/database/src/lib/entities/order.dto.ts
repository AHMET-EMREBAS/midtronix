import { ICreateOrderDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreateOrderDto implements ICreateOrderDto {
  @Property({ type: 'number', minimum: 1 }) quantity!: number;
  @Property({ type: 'number' }) salePrice!: number;
  @Property({ type: 'number' }) saleSubtotal!: number;
  @Property({ type: 'number' }) saleTotal!: number;
  @IDObjectProperty({ required: true }) sku!: IID;
  @IDObjectProperty({ required: true }) cart!: IID;
  @IDObjectProperty({ required: true }) priceLevel!: IID;
}

@Exclude()
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
