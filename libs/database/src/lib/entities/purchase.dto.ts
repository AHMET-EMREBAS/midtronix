import { ICreatePurchaseDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreatePurchaseDto implements ICreatePurchaseDto {
  @Property({ type: 'number', required: true }) unitCost!: number;
  @Property({ type: 'number', required: true }) deliveryCost!: number;
  @Property({ type: 'number', required: true }) taxrate!: number;
  @Property({ type: 'number', required: true }) quantity!: number;
  @Property({ type: 'date' }) orderDate!: Date;
  @Property({ type: 'date' }) deliveryDate!: Date;
  @Property({ type: 'string' }) notes!: string;
  @Property({ type: 'boolean' }) confirmed!: boolean;

  @IDObjectProperty({ required: true }) sku!: IID;
  @IDObjectProperty({ required: true }) manufacturer!: IID;
  @IDObjectProperty({ required: true }) employee!: IID;
}

@Exclude()
export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {}
