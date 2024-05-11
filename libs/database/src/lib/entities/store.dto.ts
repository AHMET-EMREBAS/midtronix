import { Exclude, PartialType } from '@mdtx/core';

import { CreateDescriptionDto } from './__base.dto';
import { ICreateStoreDto } from '@mdtx/common';

@Exclude()
export class CreateStoreDto
  extends CreateDescriptionDto
  implements ICreateStoreDto {}

@Exclude()
export class UpdateStoreDto extends PartialType(CreateStoreDto) {}
