import { IBaseEntity } from '@mdtx/common';

export interface ISku extends IBaseEntity {
  name: string;
  description: string;
  sku: string;
}
