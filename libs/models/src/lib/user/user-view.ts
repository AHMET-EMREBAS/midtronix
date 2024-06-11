/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IUserView extends IBaseView {
  userId: string;
  username: string;
  roles: string;
}
