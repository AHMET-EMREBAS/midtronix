import { ICreateQuantityDto, ISku, IStore } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateQuantityDto
  extends BaseCreateDto<CreateQuantityDto>
  implements ICreateQuantityDto
{
  @Property({ type: 'number', required: true, minimum: 0 })
  quantity!: number;

  @Property({ type: 'object', target: IDDto }) store!: IStore;
  @Property({ type: 'object', target: IDDto }) sku!: ISku;
}

@Exclude()
export class UdpateQuantityDto extends PartialType(CreateQuantityDto) {}
