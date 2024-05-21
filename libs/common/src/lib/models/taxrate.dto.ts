/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITaxrate } from './taxrate';

export interface ICreateTaxrateDto
  extends Pick<ITaxrate, 'district' | 'rate' | 'state'> {}

export interface IUpdateTaxrateDto extends Partial<ICreateTaxrateDto> {}
