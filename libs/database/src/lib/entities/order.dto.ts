import { ICreateOrderDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreateOrderDto implements ICreateOrderDto {
  @Property({ type: 'number', required: true, minimum: 1 })
  quantity!: number;

  @Property({ type: 'number', required: true, minimum: 0 })
  unitPrice!: number;

  @Property({ type: 'number', required: true, minimum: 0 })
  subtotal!: number;

  @Property({ type: 'number', required: true, minimum: 0 })
  total!: number;

  @IDObjectProperty({ required: true }) cart!: IID;
  @IDObjectProperty({ required: true }) sku!: IID;
}

@Exclude()
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
