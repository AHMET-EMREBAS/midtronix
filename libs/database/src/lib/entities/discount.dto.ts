import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';
import { ICreateDiscountDto, IID } from '@mdtx/common';

@Exclude()
export class CreateDiscountDto implements ICreateDiscountDto {
  @Property({ type: 'string', required: true }) name!: string;
  @Property({ type: 'number' }) fixed!: number;
  @Property({ type: 'number' }) percent!: number;
  @Property({ type: 'string', required: true }) startDate!: Date;
  @Property({ type: 'string', required: true }) endDate!: Date;
  @IDObjectProperty({ required: true }) sku!: IID;
}

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {}
