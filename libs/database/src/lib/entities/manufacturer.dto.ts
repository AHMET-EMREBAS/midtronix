import { ICreateManufacturerDto } from '@mdtx/common';
import { Exclude, PartialType } from '@mdtx/core';
import { CreateDescriptionDto } from './__base.dto';

@Exclude()
export class CreateManufacturerDto
  extends CreateDescriptionDto
  implements ICreateManufacturerDto {}

export class UpdateManufacturerDto extends PartialType(CreateManufacturerDto) {}
