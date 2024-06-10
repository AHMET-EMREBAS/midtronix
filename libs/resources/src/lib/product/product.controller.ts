import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Product,
  CreateProductDto,
  UdpateProductDto,
  ProductQueryDto,
} from '@mdtx/entities';
import { ProductService } from './product.service';

import { ApiVersion } from '@mdtx/common';

export const ProductRRB = RestRouteBuilder.get(Product.name, ApiVersion.v1);

@ProductRRB.Controler()
export class ProductController extends CreateBasicController<
  Product,
  CreateProductDto,
  UdpateProductDto,
  ProductQueryDto
>(ProductRRB, Product, CreateProductDto, UdpateProductDto, ProductQueryDto) {
  constructor(service: ProductService) {
    super(service);
  }
}
