/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, StringifyType } from '@mdtx/common';
import { ISample } from './sample';

export type SampleQueryFields = PickKeys<ISample, keyof ISample>;

export interface ICreateSampleDto extends Pick<ISample, 'name'> {}

export interface IUpdateSampleDto extends Partial<ICreateSampleDto> {}

export interface IQuerySampleDto
  extends Pick<StringifyType<ISample>, SampleQueryFields> {}


  