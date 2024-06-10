/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IManufacturerView extends IBaseView {
  name: string;
  description: string;
  manufacturerId: string;
}
