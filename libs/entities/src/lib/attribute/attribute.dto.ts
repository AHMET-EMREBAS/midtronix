import { ICreateAttributeDto, ISku } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateAttributeDto
  extends BaseCreateDto<CreateAttributeDto>
  implements ICreateAttributeDto
{
  @Property({ type: 'string', minLength: 1, required: true }) key!: string;

  @Property({ type: 'string', minLength: 1 }) value!: string;

  @Property({ type: 'object', target: IDDto, required: true }) sku!: ISku;
}

@Exclude()
export class UdpateAttributeDto extends PartialType(CreateAttributeDto) {}
