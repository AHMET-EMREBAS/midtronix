import { IBaseEntity } from '@mdtx/common';

export interface IPriceLevel extends IBaseEntity {
  name: string;
  description: string;
  taxrate: number;
}
