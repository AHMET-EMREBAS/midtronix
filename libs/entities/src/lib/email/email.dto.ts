import { ICreateEmailDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateEmailDto
  extends BaseCreateDto<CreateEmailDto>
  implements ICreateEmailDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateEmailDto extends PartialType(CreateEmailDto) {}
