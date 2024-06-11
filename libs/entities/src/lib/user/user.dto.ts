import { ICreateUserDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateUserDto
  extends BaseCreateDto<CreateUserDto>
  implements ICreateUserDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateUserDto extends PartialType(CreateUserDto) {}
