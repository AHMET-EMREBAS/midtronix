/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BasePaginatorQueryDto,
  SearchProperty,
  QueryOperatorProperty,
  BaseWhereQueryDto,
  OrderProperty,
  WhereProperty,
} from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { Email } from './email.entity';
import { FindOperator } from 'typeorm';
import { EmailMetadataInstance } from './email.metata';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IEmail } from '@mdtx/models';

@Exclude()
export class EmailWhereQueryDto
  extends BaseWhereQueryDto<Email>
  implements
    AllPropertyType<
      Omit<IEmail, keyof IBaseEntity | 'user'>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  email!: FindOperator<string>;
}

@Exclude()
export class EmailQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Email>(['email'])
  search!: EmailWhereQueryDto;

  @WhereProperty(EmailWhereQueryDto)
  where!: EmailWhereQueryDto;

  @OrderProperty<Email>(EmailMetadataInstance.propertyNames())
  order: any;
}
