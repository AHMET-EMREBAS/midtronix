import { ICreateCartDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType } from '@mdtx/core';

@Exclude()
export class CreateCartDto implements ICreateCartDto {
  @IDObjectProperty({ required: true }) user!: IID;
  @IDObjectProperty({ required: true }) owner!: IID;
  @IDObjectProperty({ required: true }) store!: IID;
}

@Exclude()
export class UpdateCartDto extends PartialType(CreateCartDto) {}
