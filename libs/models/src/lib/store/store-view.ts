/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IStoreView extends IBaseView {
  name: string;
  storeId: string;
}
