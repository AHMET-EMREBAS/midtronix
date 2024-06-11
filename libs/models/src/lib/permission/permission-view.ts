/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IPermissionView extends IBaseView {
  name: string;
  resourceName: string;
  actionName: string;
  permissionId: string;
}