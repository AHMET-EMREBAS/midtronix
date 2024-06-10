import { ICreateStoreDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateStoreDto
  extends BaseCreateDto<CreateStoreDto>
  implements ICreateStoreDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateStoreDto extends PartialType(CreateStoreDto) {}
