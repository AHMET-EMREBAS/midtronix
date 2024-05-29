/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';

export interface IPurchase<
  ISku extends IID = IID,
  TManufacturer extends IID = IID,
  TUser extends IID = IID
> extends IBaseEntity {
  unitCost: number;
  deliveryCost: number;
  quantity: number;
  taxrate: number;
  orderDate: Date;
  deliveryDate: Date;
  notes: string;
  confirmed: boolean;
  sku: ISku;
  manufacturer: TManufacturer;
  employee: TUser;
}
