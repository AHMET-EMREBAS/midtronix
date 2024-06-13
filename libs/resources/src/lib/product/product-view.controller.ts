import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { ProductView, ProductViewQueryDto } from '@mdtx/entities';
import { ProductViewService } from './product-view.service';
import { ApiVersion } from '@mdtx/common';

export const ProductViewRRB = RestRouteBuilder.get(
  ProductView.name,
  ApiVersion.v1
);

@ProductViewRRB.Controler()
export class ProductViewController extends CreateBasicViewController<
  ProductView,
  ProductViewQueryDto
>(ProductViewRRB, ProductView, ProductViewQueryDto) {
  constructor(service: ProductViewService) {
    super(service);
  }
}
