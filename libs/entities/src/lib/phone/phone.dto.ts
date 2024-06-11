import { ICreatePhoneDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreatePhoneDto
  extends BaseCreateDto<CreatePhoneDto>
  implements ICreatePhoneDto
{
  @Property({ type: 'string', format: 'phone', required: true })
  phone!: string;
}

@Exclude()
export class UdpatePhoneDto extends PartialType(CreatePhoneDto) {}
