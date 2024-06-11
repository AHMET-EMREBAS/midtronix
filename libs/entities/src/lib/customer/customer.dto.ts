import { ICreateCustomerDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateCustomerDto
  extends BaseCreateDto<CreateCustomerDto>
  implements ICreateCustomerDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateCustomerDto extends PartialType(CreateCustomerDto) {}
