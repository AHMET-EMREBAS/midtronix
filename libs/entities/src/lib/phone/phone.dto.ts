import { ICreatePhoneDto, IUser } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreatePhoneDto
  extends BaseCreateDto<CreatePhoneDto>
  implements ICreatePhoneDto
{
  @Property({ type: 'string', format: 'phone', required: true })
  phone!: string;

  @Property({ type: 'object', target: IDDto, required: true })
  user!: IUser;
}

@Exclude()
export class UdpatePhoneDto extends PartialType(CreatePhoneDto) {}
