/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView, StringifyType } from '@mdtx/common';

export interface ISampleView extends IBaseView {
  //TODO:
  name: string;
  sampleId: string;
}

export const SampleViewLabels: Required<StringifyType<ISampleView>> = {
  id: '#',
  name: 'Sample Name',
  sampleId: 'Sample Id',
  active: 'Active',
  createdAt: 'Created',
  deletedAt: 'Deleted',
  updatedAt: 'Updated',
  createdBy: 'Creator',
  updatedBy: 'Updator',
};

export const SampleViewFields = Object.keys(
  SampleViewLabels
) as (keyof ISampleView)[];
