import { ICreateTaxrateDto } from '@mdtx/common';
import { Exclude, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreateTaxrateDto implements ICreateTaxrateDto {
  @Property({ type: 'string', required: true }) district!: string;
  @Property({ type: 'string', required: true }) state!: string;
  @Property({ type: 'number', required: true }) rate!: number;
}

@Exclude()
export class UpdateTaxrateDto extends PartialType(CreateTaxrateDto) {}
