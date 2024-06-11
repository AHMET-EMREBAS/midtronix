import { ICreateEmailDto, IUser } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateEmailDto
  extends BaseCreateDto<CreateEmailDto>
  implements ICreateEmailDto
{
  @Property({ type: 'string', format: 'email', required: true })
  email!: string;

  @Property({ type: 'object', required: true, target: IDDto })
  user!: IUser;
}

@Exclude()
export class UdpateEmailDto extends PartialType(CreateEmailDto) {}
