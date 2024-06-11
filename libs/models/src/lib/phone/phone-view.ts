/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IPhoneView extends IBaseView {
  phone: string;
  phoneId: string;
  userId: string;
}
