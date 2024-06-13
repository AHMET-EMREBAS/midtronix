/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseView } from '@mdtx/common';
import { BaseService } from './base.service';

export class BaseViewEntityService<
  T extends IBaseView
> extends BaseService<T> {}
