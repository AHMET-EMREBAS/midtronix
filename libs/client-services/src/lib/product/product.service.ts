import { BaseNgrxService } from '../__base';
import { IProduct, Injectable, HttpClient, Factory } from '../__externals';

@Injectable()
export class ProductService extends BaseNgrxService<IProduct> {
  constructor(factory: Factory, httpClient: HttpClient) {
    super('Product', factory, httpClient);
  }
}
