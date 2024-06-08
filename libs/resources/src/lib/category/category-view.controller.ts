import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { CategoryQueryDto, CategoryView } from '@mdtx/entities';
import { CategoryService } from './category.service';
import { ApiVersion } from '@mdtx/common';

export const CategoryViewRRB = RestRouteBuilder.get(
  CategoryView.name,
  ApiVersion.v1
);

@CategoryViewRRB.Controler()
export class CategoryViewController extends CreateBasicViewController<
  CategoryView,
  CategoryQueryDto
>(CategoryViewRRB, CategoryView, CategoryQueryDto) {
  constructor(service: CategoryService) {
    super(service);
  }
}
