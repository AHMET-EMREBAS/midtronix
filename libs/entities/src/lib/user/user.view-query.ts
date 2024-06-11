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

import { IUserView } from '@mdtx/models';
import { UserView } from './user.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { UserMetadataInstance } from './user.metata';

@Exclude()
export class UserViewWhereQueryDto
  extends BaseWhereQueryDto<UserView>
  implements
    AllPropertyType<Omit<IUserView, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' }) username!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) roles!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) userId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' }) name!: FindOperator<string>;
}

@Exclude()
export class UserViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'userId']) search!: UserViewWhereQueryDto;

  @WhereProperty(UserViewWhereQueryDto) where!: UserViewWhereQueryDto;

  @OrderProperty(UserMetadataInstance.propertyNames()) order: any;
}
