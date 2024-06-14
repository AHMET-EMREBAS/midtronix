import { ICreateSkuDto, IProduct } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateSkuDto
  extends BaseCreateDto<CreateSkuDto>
  implements Omit<ICreateSkuDto, 'attributes'>
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;

  @Property({ type: 'string', required: true }) sku!: string;

  @Property({ type: 'string' }) description!: string;

  @Property({ type: 'object', target: IDDto, required: true })
  product!: IProduct;
}

@Exclude()
export class UdpateSkuDto extends PartialType(CreateSkuDto) {}
