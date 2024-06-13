import { ICategory, ICreateProductDto, ISupplier } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateProductDto
  extends BaseCreateDto<CreateProductDto>
  implements ICreateProductDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;

  @Property({ type: 'string' })
  description!: string;

  @Property({ type: 'string', required: true, minLength: 8, maxLength: 13 })
  upc!: string;

  @Property({ type: 'number', required: true, minimum: 0 })
  price!: number;

  @Property({ type: 'number', required: true, lessThan: 'price' })
  cost!: number;

  @Property({ type: 'integer', required: true, minimum: 0 })
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
