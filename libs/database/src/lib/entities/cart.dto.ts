import { ICreateCartDto, IID } from '@mdtx/common';
import { Exclude, IDDto, IDObjectProperty, PartialType } from '@mdtx/core';

@Exclude()
export class CreateCartDto implements ICreateCartDto {
  @IDObjectProperty({ required: true, objectType: IDDto }) user!: IID;
  @IDObjectProperty({ required: true, objectType: IDDto }) owner!: IID;
}

@Exclude()
export class UpdateCartDto extends PartialType(CreateCartDto) {}
