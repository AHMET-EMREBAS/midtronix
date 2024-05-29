import { ICreatePurchaseDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreatePurchaseDto implements ICreatePurchaseDto {
  @Property({ type: 'string' }) name!: string;
  @Property({ type: 'string' }) description!: string;
  @Property({ type: 'string' }) upc!: string;
  @Property({ type: 'number' }) unitCost!: number;
  @Property({ type: 'number' }) deliveryCost!: number;
  @Property({ type: 'number' }) taxrate!: number;
  @Property({ type: 'number' }) subtotal!: number;
  @Property({ type: 'number' }) quantity!: number;
  @Property({ type: 'number' }) total!: number;
  @Property({ type: 'string' }) orderDate!: Date;
  @Property({ type: 'string' }) deliveryDate!: Date;
  @Property({ type: 'string' }) notes!: string;
  @Property({ type: 'boolean' }) confirmed!: boolean;
  @IDObjectProperty({ required: true }) manufacturer!: IID;
  @IDObjectProperty({ required: true }) employee!: IID;
}

@Exclude()
export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {}
