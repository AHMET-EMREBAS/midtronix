import { ICreateSkuDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateSkuDto
  extends BaseCreateDto<CreateSkuDto>
  implements ICreateSkuDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateSkuDto extends PartialType(CreateSkuDto) {}
