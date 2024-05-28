import { Component } from '@angular/core';
import { CategoryViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CategoryViewToolbarComponent } from '../../toolbars';
import {
  CATEGORY_VIEW_COLUMNS,
  CATEGORY_VIEW_DISPLAY_COLUMNS,
  CATEGORY_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICategoryViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-category-view-table',
  standalone: true,
  imports: [...TableModules, CategoryViewToolbarComponent],
  templateUrl: './category-view-table.component.html',
  styleUrl: './category-view-table.component.scss',
  providers: [CategoryViewService],
})
export class CategoryViewTableComponent extends BaseTableComponent<ICategoryViewRaw> {
  override pageIndex = 0;
  override pageSize = CATEGORY_VIEW_PAGE_SIZE;
  override columns = CATEGORY_VIEW_COLUMNS;
  override displayedColumns = CATEGORY_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CategoryViewService, protected readonly router: Router) {
    super(service);
  }
}
