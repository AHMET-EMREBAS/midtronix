/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IUserView extends IBaseView {
  name: string;
  userId: string;
}
