/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseView } from '@mdtx/common';

export interface IAddressView extends IBaseView {
  addressId: string;
  userId: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}
