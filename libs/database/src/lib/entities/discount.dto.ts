import { Exclude, PartialType, Property } from '@mdtx/core';
import { ICreateDiscountDto, IID } from '@mdtx/common';

@Exclude()
export class CreateDiscountDto implements ICreateDiscountDto {
  @Property({ type: 'number' }) fixed!: number;
  @Property({ type: 'number' }) percent!: number;
  @Property({ type: 'string', required: true }) startDate!: Date;
  @Property({ type: 'string', required: true }) endDate!: Date;
  @Property({ type: 'number', required: true }) skus!: IID[];
}

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {}
