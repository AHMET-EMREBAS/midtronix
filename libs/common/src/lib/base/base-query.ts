import { AllPropertyType } from '../types';
import { IBaseEntity } from './base-entity';

export interface IBaseQueryDto<S = any, W = any, O = any> {
  take?: number;
  skip?: number;
  withDeleted?: boolean;
  search?: S;
  where?: W;
  order?: O;
}

export interface IClientBaseQueryDto {
  withDeleted?: boolean;
  search?: string;
  order?: string;
}

export interface IBaseCountQuery<S = any, W = any, O = any> {
  withDeleted?: boolean;
  search?: S;
  where?: W;
  order?: O;
}

export type IClientQueryDto<T> =
  | AllPropertyType<Omit<T, 'id'>, string> & IClientBaseQueryDto;
