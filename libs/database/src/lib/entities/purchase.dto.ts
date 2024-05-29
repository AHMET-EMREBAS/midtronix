import { ICreatePurchaseDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreatePurchaseDto implements ICreatePurchaseDto {
  @Property({ type: 'number', required: true }) unitCost!: number;
  @Property({ type: 'number', required: true }) deliveryCost!: number;
  @Property({ type: 'number', required: true }) taxrate!: number;
  @Property({ type: 'number', required: true }) quantity!: number;
  @Property({ type: 'date', example: '5-24-2024' }) orderDate!: Date;
  @Property({ type: 'date', example: '5-26-2024' }) expectedDeliveryDate!: Date;
  @Property({ type: 'date', example: '' }) deliveryDate!: Date;

  @Property({ type: 'boolean' }) delivered!: boolean;
  @Property({ type: 'boolean' }) confirmed!: boolean;
  @Property({ type: 'string' }) notes!: string;

  @IDObjectProperty({ required: true }) sku!: IID;
  @IDObjectProperty({ required: true }) manufacturer!: IID;
  @IDObjectProperty({ required: true }) employee!: IID;
}

@Exclude()
export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {}
