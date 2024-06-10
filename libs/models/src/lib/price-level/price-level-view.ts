/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IPriceLevelView extends IBaseView {
  name: string;
  taxrate: string;
  description: string;
  priceLevelId: string;
}
