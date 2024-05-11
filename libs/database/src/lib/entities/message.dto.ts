import { ICreateMessageDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreateMessageDto implements ICreateMessageDto {
  @Property({ type: 'string', required: true }) message!: string;
  @Property({ type: 'boolean' }) read?: boolean | undefined;
  @IDObjectProperty({ required: true }) target!: IID;
  @IDObjectProperty({ required: true }) source!: IID;
}

@Exclude()
export class UpdateMessageDto extends PartialType(CreateMessageDto) {}
