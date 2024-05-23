import { ICreateSaleDto, IID } from '@mdtx/common';
import { Exclude, PartialType } from '@mdtx/core';

@Exclude()
export class CreateSaleDto implements ICreateSaleDto {
  orders!: IID[];
  cart!: IID;
  taxrate!: number;
  cashPayment!: number;
  cardPayment!: number;
}

@Exclude()
export class UpdateSaleDto extends PartialType(CreateSaleDto) {}
