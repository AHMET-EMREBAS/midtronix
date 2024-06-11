/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface ICustomerView extends IBaseView {
  name: string;
  customerId: string;
}
