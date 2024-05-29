/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';

export interface IPurchase<
  TManufacturer extends IID = IID,
  TUser extends IID = IID
> extends IBaseEntity {
  name: string;
  description: string;
  upc: string;
  unitCost: number;
  deliveryCost: number;
  quantity: number;
  taxrate: number;
  subtotal: number;
  total: number;
  orderDate: Date;
  deliveryDate: Date;
  notes: string;
  confirmed: boolean;
  manufacturer: TManufacturer;
  employee: TUser;
}
