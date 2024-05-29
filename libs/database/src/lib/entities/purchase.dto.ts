import { ICreatePurchaseDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreatePurchaseDto implements ICreatePurchaseDto {
  @Property({ type: 'string', required: true, minLength: 3 }) name!: string;
  @Property({ type: 'string' }) description!: string;
  @Property({ type: 'string', required: true, minLength: 12, maxLength: 13 })
  upc!: string;
  @Property({ type: 'number', minimum: 0 }) unitCost!: number;
  @Property({ type: 'number', minimum: 0 }) deliveryCost!: number;
  @Property({ type: 'number', minimum: 0 }) taxrate!: number;
  @Property({ type: 'number', minimum: 0 }) subtotal!: number;
  @Property({ type: 'number', minimum: 0 }) quantity!: number;
  @Property({ type: 'number', minimum: 0 }) total!: number;
  @Property({ type: 'string' }) orderDate!: Date;
  @Property({ type: 'string' }) deliveryDate!: Date;
  @Property({ type: 'string' }) notes!: string;
  @Property({ type: 'boolean' }) confirmed!: boolean;
  @IDObjectProperty({ required: true }) manufacturer!: IID;
  @IDObjectProperty({ required: true }) employee!: IID;
}

@Exclude()
export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {}
