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
import { FindOperator } from 'typeorm';

import { IEmailView } from '@mdtx/models';
import { EmailView } from './email.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { EmailMetadataInstance } from './email.metata';

@Exclude()
export class EmailViewWhereQueryDto
  extends BaseWhereQueryDto<EmailView>
  implements
    AllPropertyType<Omit<IEmailView, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  emailId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class EmailViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'emailId'])
  search!: EmailViewWhereQueryDto;

  @WhereProperty(EmailViewWhereQueryDto)
  where!: EmailViewWhereQueryDto;

  @OrderProperty(EmailMetadataInstance.propertyNames())
  order: any;
}
