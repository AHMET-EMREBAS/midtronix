import { ICreateStoreDto } from '@mdtx/common';
import { DescriptionForm, FormType } from '../__base';

export class StoreForm
  extends DescriptionForm
  implements FormType<ICreateStoreDto> {}
