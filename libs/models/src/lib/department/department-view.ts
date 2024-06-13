/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IDepartmentView extends IBaseView {
  name: string;
  departmentId: number;
}
