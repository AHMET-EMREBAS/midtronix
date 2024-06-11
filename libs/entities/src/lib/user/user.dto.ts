import { ICreateUserDto, IRole } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateUserDto
  extends BaseCreateDto<CreateUserDto>
  implements ICreateUserDto
{
  @Property({ type: 'string', format: 'email', required: true })
  username!: string;

  @Property({ type: 'string', format: 'password', required: true })
  password!: string;

  @Property({ type: 'object', target: IDDto, isArray: true })
  roles!: IRole[];
}

@Exclude()
export class UdpateUserDto extends PartialType(CreateUserDto) {}
