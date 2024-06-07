import { AllPropertyType, IBaseEntity, IBaseQueryDto } from '@mdtx/common';
import { Property } from '../property';
import { Exclude } from 'class-transformer';
import { FindOperator } from 'typeorm';
import { QueryOperatorProperty } from '../query';
import { BaseDto } from './base.dto';

/**
 * Generic Query
 */
@Exclude()
export class BasePaginatorQueryDto
  implements Omit<IBaseQueryDto, 'where' | 'search' | 'order'>
{
  @Property({ type: 'number', default: 200 })
  take!: number;

  @Property({ type: 'number', default: 0 })
  skip!: number;

  @Property({ type: 'boolean', default: false })
  withDeleted!: boolean;
}

/**
 * Specific Query
 */
export class BaseWhereQueryDto<T>
  extends BaseDto<BaseWhereQueryDto<T>>
  implements AllPropertyType<Omit<IBaseEntity, 'id'>, FindOperator<T>>
{
  @QueryOperatorProperty({ type: 'date' })
  createdAt!: FindOperator<T>;

  @QueryOperatorProperty({ type: 'date' })
  updatedAt!: FindOperator<T>;

  @QueryOperatorProperty({ type: 'date' })
  deletedAt!: FindOperator<T>;

  @QueryOperatorProperty({ type: 'integer' })
  createdBy!: FindOperator<T>;

  @QueryOperatorProperty({ type: 'integer' })
  updatedBy!: FindOperator<T>;

  @QueryOperatorProperty({ type: 'boolean' })
  active!: FindOperator<T>;
}
