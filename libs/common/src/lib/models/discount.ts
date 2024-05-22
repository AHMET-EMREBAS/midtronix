/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { ISku } from './product';
/**
 * @param fixed
 * @param percent
 * @param startDate
 * @param endDate
 * @param skus
 */
export interface IDiscount<TSku extends IID = IID> extends IBaseEntity {
  name: string;
  fixed: number;
  percent: number;
  startDate: Date;
  endDate: Date;
  skus: TSku[];
}

/**
 * @param fixed
 * @param percent
 * @param startDate
 * @param endDate
 * @param skus
 */
export interface IDiscountRaw extends IDiscount<ISku> {}

export interface ICreateDiscountDto
  extends Omit<IDiscount, keyof IBaseEntity> {}
