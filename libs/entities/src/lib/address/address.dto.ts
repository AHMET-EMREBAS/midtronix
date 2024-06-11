import { ICreateAddressDto, IUser } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateAddressDto
  extends BaseCreateDto<CreateAddressDto>
  implements ICreateAddressDto
{
  @Property({ type: 'string', required: true, minLength: 1 }) street!: string;
  @Property({ type: 'string', required: true, minLength: 1 }) city!: string;
  @Property({ type: 'string', required: true, minLength: 1 }) state!: string;
  @Property({ type: 'string', required: true, minLength: 1 }) country!: string;
  @Property({ type: 'string', required: true, minLength: 1 }) zip!: string;
  @Property({ type: 'object', target: IDDto }) user!: IUser;
}

@Exclude()
export class UdpateAddressDto extends PartialType(CreateAddressDto) {}
