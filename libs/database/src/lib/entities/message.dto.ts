import { ICreateMessageDto, ICreateNotificationDto, IID } from '@mdtx/common';
import {
  Exclude,
  IDDto,
  IDObjectProperty,
  PartialType,
  Property,
} from '@mdtx/core';

@Exclude()
export class CreateMessageDto implements ICreateMessageDto {
  @Property({ type: 'string', required: true }) message!: string;
  @Property({ type: 'boolean' }) read?: boolean | undefined;
  @IDObjectProperty({ required: true }) target!: IID;
  @IDObjectProperty({ required: true }) source!: IID;
}

@Exclude()
export class UpdateMessageDto extends PartialType(CreateMessageDto) {}

@Exclude()
export class CreateNotificationDto implements ICreateNotificationDto {
  @Property({ type: 'string', required: true }) message!: string;
  @Property({ type: 'boolean' }) read?: boolean | undefined;
  @IDObjectProperty({ required: true }) target!: IDDto;
  @IDObjectProperty({ required: true }) source!: IDDto;
}

@Exclude()
export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}
