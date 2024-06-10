import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Category,
  CreateCategoryDto,
  UdpateCategoryDto,
  CategoryQueryDto,
} from '@mdtx/entities';
import { CategoryService } from './category.service';

import { ApiVersion } from '@mdtx/common';

export const CategoryRRB = RestRouteBuilder.get(Category.name, ApiVersion.v1);

@CategoryRRB.Controler()
export class CategoryController extends CreateBasicController<
  Category,
  CreateCategoryDto,
  UdpateCategoryDto,
  CategoryQueryDto
>(
  CategoryRRB,
  Category,
  CreateCategoryDto,
  UdpateCategoryDto,
  CategoryQueryDto
) {
  constructor(service: CategoryService) {
    super(service);
  }
}
