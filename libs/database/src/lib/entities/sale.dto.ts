import { ICreateSaleDto } from '@mdtx/common';
import { Exclude, PartialType } from '@mdtx/core';

@Exclude()
export class CreateSaleDto implements ICreateSaleDto {}

@Exclude()
export class UpdateSaleDto extends PartialType(CreateSaleDto) {}
