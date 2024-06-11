import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { ProductQueryDto, ProductView } from '@mdtx/entities';
import { ProductViewService } from './product-view.service';
import { ApiVersion } from '@mdtx/common';

export const ProductViewRRB = RestRouteBuilder.get(
  ProductView.name,
  ApiVersion.v1
);

@ProductViewRRB.Controler()
export class ProductViewController extends CreateBasicViewController<
  ProductView,
  ProductQueryDto
>(ProductViewRRB, ProductView, ProductQueryDto) {
  constructor(service: ProductViewService) {
    super(service);
  }
}
