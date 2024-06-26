import { ICreateCartDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreateCartDto implements ICreateCartDto {
  @IDObjectProperty({ required: true }) employee!: IID;
  @IDObjectProperty({ required: true }) customer!: IID;
  @IDObjectProperty({ required: true }) store!: IID;
  @Property({ type: 'string' }) note?: string;
  @Property({ type: 'boolean' }) checkout?: boolean | undefined;
}

@Exclude()
export class UpdateCartDto extends PartialType(CreateCartDto) {}
