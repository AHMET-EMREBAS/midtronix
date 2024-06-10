import { ICreateManufacturerDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateManufacturerDto
  extends BaseCreateDto<CreateManufacturerDto>
  implements ICreateManufacturerDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;

  @Property({ type: 'string', maxLength: 400 })
  description!: string;
}

@Exclude()
export class UdpateManufacturerDto extends PartialType(CreateManufacturerDto) {}
