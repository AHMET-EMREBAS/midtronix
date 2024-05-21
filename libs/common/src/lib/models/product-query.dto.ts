/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISkuViewRaw } from './sku.view';

// export interface IQuerySingleSkuViewDto
//   extends Pick<ISkuViewRaw, 'barcode' | 'storeId' | 'priceLevelId'> {}

export interface IQuerySkuViewDto extends ISkuViewRaw {}
