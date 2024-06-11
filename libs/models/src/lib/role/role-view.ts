/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IRoleView extends IBaseView {
  name: string;
  permission: string;
  permissionId: string;
  roleId: string;
}
