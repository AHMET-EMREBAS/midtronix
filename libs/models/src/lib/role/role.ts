import { IBaseEntity } from '@mdtx/common';
import { IPermission } from '../permission';

export interface IRole extends IBaseEntity {
  name: string;
  permissions: IPermission[];
}
