/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface ISupplierView extends IBaseView {
  name: string;
  supplierId: string;
}
