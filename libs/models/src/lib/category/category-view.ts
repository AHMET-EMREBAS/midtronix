/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface ICategoryView extends IBaseView {
  name: string;
  categoryId: string;
}
