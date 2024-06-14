import { ICreatePriceDto, IPriceLevel, ISku } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreatePriceDto
  extends BaseCreateDto<CreatePriceDto>
  implements ICreatePriceDto
{
  @Property({ type: 'number', required: true, minimum: 0 })
  cost!: number;

  @Property({ type: 'number', required: true, moreThan: 'cost' })
  price!: number;

  @Property({ type: 'object', required: true, target: IDDto })
  priceLevel!: IPriceLevel;

  @Property({ type: 'object', required: true, target: IDDto })
  sku!: ISku;
}

@Exclude()
export class UdpatePriceDto extends PartialType(CreatePriceDto) {}
