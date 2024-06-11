import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { CategoryQueryDto, CategoryView } from '@mdtx/entities';
import { ApiVersion } from '@mdtx/common';
import { CategoryViewService } from './category-view.service';

export const CategoryViewRRB = RestRouteBuilder.get(
  CategoryView.name,
  ApiVersion.v1
);

@CategoryViewRRB.Controler()
export class CategoryViewController extends CreateBasicViewController<
  CategoryView,
  CategoryQueryDto
>(CategoryViewRRB, CategoryView, CategoryQueryDto) {
  constructor(service: CategoryViewService) {
    super(service);
  }
}
