import { ICreateSupplierDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateSupplierDto
  extends BaseCreateDto<CreateSupplierDto>
  implements ICreateSupplierDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;

  @Property({ type: 'string', maxLength: 400 })
  description!: string;
}

@Exclude()
export class UdpateSupplierDto extends PartialType(CreateSupplierDto) {}
