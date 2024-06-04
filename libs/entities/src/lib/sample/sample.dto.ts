import { ICreateSampleDto } from '@mdtx/models';
import { BaseDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateSampleDto
  extends BaseDto<CreateSampleDto>
  implements ICreateSampleDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateSampleDto extends PartialType(CreateSampleDto) {}
