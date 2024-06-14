import { ICategory, ICreateProductDto, ISupplier } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateProductDto
  extends BaseCreateDto<CreateProductDto>
  implements ICreateProductDto
{
  @Property({ type: 'boolean' })
  autoGenerateSerial!: boolean;

  @Property({ type: 'string', format: 'name', required: true })
  name!: string;

  @Property({ type: 'string' })
  description!: string;

  @Property({ type: 'string', minLength: 8, maxLength: 13 })
  upc!: string;

  @Property({ type: 'number', minimum: 0 })
  price!: number;

  @Property({ type: 'number', lessThan: 'price' })
  cost!: number;

  @Property({ type: 'integer', minimum: 0 })
  quantity!: number;

  @Property({ type: 'string' })
  brand!: string;

  @Property({ type: 'object', target: IDDto })
  supplier!: ISupplier;

  @Property({ type: 'object', target: IDDto })
  category!: ICategory;

  @Property({ type: 'boolean', required: false })
  serialNumberRequired!: boolean;
}

@Exclude()
export class UdpateProductDto extends PartialType(CreateProductDto) {}
