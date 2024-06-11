/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IEmailView extends IBaseView {
  name: string;
  emailId: string;
}
