import { ICreatePhoneDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreatePhoneDto
  extends BaseCreateDto<CreatePhoneDto>
  implements ICreatePhoneDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpatePhoneDto extends PartialType(CreatePhoneDto) {}
