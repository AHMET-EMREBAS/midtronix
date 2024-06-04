import { ICreateCartDto, IID } from '@mdtx/common';
import {
  CreateSearchDto,
  CreateSelectDto,
  Exclude,
  IDObjectProperty,
  PartialType,
  Property,
} from '@mdtx/core';

@Exclude()
export class CreateCartDto implements ICreateCartDto {
  @IDObjectProperty({ required: true }) customer!: IID;
  @IDObjectProperty({ required: true }) store!: IID;
  @Property({ type: 'string' }) note?: string;
  @Property({ type: 'boolean' }) checkout?: boolean | undefined;
}

@Exclude()
export class UpdateCartDto extends PartialType(CreateCartDto) {}

@Exclude()
export class SearchCartDto extends CreateSearchDto(['note']) {}

@Exclude()
export class SelectCartDto extends CreateSelectDto([
  'employee',
  'customer',
  'store',
  'note',
  'checkout',
]) {}
