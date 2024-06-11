import { IBaseEntity } from '@mdtx/common';

export interface IPermission extends IBaseEntity {
  name: string;
  resourceName: string;
  actionName: string;
}
