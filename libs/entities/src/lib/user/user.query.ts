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
import { User } from './user.entity';
import { FindOperator } from 'typeorm';
import { UserMetadataInstance } from './user.metata';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { IUser } from '@mdtx/models';

@Exclude()
export class UserWhereQueryDto
  extends BaseWhereQueryDto<User>
  implements
    AllPropertyType<Omit<IUser, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class UserQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<User>(['name'])
  search!: UserWhereQueryDto;

  @WhereProperty(UserWhereQueryDto)
  where!: UserWhereQueryDto;

  @OrderProperty<User>(UserMetadataInstance.propertyNames())
  order: any;
}
