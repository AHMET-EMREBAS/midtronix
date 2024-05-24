import { ICreateSaleDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType } from '@mdtx/core';

@Exclude()
export class CreateSaleDto implements Omit<ICreateSaleDto, 'user' | 'store'> {
  @IDObjectProperty({ required: true }) cart!: IID;
  @IDObjectProperty({}) customer!: IID;
  @IDObjectProperty({ required: true, isArray: true }) orders!: IID[];
  @IDObjectProperty({ required: true }) taxrate!: number;
  @IDObjectProperty({ required: true }) cashPayment!: number;
  @IDObjectProperty({ required: true }) cardPayment!: number;
}

@Exclude()
export class UpdateSaleDto extends PartialType(CreateSaleDto) {}
