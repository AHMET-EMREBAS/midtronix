/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys } from '@mdtx/common';
import { ISample } from './sample';

export type SampleQueryFields = PickKeys<ISample, keyof ISample>;

export interface ICreateSampleDto
  extends Pick<ISample, 'name' | 'category' | 'active'> {}

export interface IUpdateSampleDto extends Partial<ICreateSampleDto> {}
