import { ICreatePriceLevelDto } from '@mdtx/common';
import { DescriptionForm, FormType } from '../__base';

export class PriceLevelForm
  extends DescriptionForm
  implements FormType<ICreatePriceLevelDto> {}
