/* eslint-disable @typescript-eslint/no-explicit-any */
import { AllPropertyType, IID } from '@mdtx/common';
import { BaseService } from './base.service';

export class BaseViewEntityService<
  T extends AllPropertyType<IID, string> = AllPropertyType<IID, string>
> extends BaseService<T> {}
