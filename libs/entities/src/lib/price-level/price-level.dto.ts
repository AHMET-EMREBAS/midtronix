import { ICreatePriceLevelDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreatePriceLevelDto
  extends BaseCreateDto<CreatePriceLevelDto>
  implements ICreatePriceLevelDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpatePriceLevelDto extends PartialType(CreatePriceLevelDto) {}
