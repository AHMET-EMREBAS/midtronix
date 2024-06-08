import { ICreateSampleDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateSampleDto
  extends BaseCreateDto<CreateSampleDto>
  implements ICreateSampleDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;

  @Property({ type: 'string', enum: ['First', 'Second', 'Third'] })
  category!: string;
}

@Exclude()
export class UdpateSampleDto extends PartialType(CreateSampleDto) {}
