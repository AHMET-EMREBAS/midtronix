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

  @Property({ type: 'string', maxLength: 400 })
  description!: string;

  @Property({ type: 'number', minimum: 0, required: true })
  taxrate!: number;
}

@Exclude()
export class UdpatePriceLevelDto extends PartialType(CreatePriceLevelDto) {}
