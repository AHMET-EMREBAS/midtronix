import { ICreateImageDto, ICreateVideoDto, IID } from '@mdtx/common';
import { CreateNameDto } from './__base.dto';
import { Exclude, IDObjectProperty, Property } from '@mdtx/core';

@Exclude()
export class CreateImageDto extends CreateNameDto implements ICreateImageDto {
  @Property({ type: 'string' }) url!: string;
  @IDObjectProperty({ required: true }) owner!: IID;
}

@Exclude()
export class CreateVideoDto extends CreateNameDto implements ICreateVideoDto {
  @Property({ type: 'string' }) url!: string;
  @IDObjectProperty({ required: true }) owner!: IID;
}
