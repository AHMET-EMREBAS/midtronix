import { ISample } from '@mdtx/models';
import { BaseEntity } from '@mdtx/core';

export class Sample extends BaseEntity implements ISample {
  name!: string;
}
