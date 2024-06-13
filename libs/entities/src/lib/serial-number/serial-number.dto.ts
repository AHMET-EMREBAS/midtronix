import {
  ICreateSerialNumberDto,
  IProduct,
  SerialNumberStatus,
} from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateSerialNumberDto
  extends BaseCreateDto<CreateSerialNumberDto>
  implements ICreateSerialNumberDto
{
  @Property({
    type: 'string',
    enum: ['in stock', 'returned', 'sold'] as SerialNumberStatus[],
  })
  status!: SerialNumberStatus;

  @Property({ type: 'string', required: true })
  serialNumber!: string;

  @Property({ type: 'object', target: IDDto })
  product!: IProduct;

  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateSerialNumberDto extends PartialType(CreateSerialNumberDto) {}
