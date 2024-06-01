import { Component } from '@angular/core';
import { CategoryService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CategoryToolbarComponent } from '../../toolbars';
import {
  CATEGORY_COLUMNS,
  CATEGORY_DISPLAY_COLUMNS,
  CATEGORY_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICategoryRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-category-table',
  standalone: true,
  imports: [...TableModules, CategoryToolbarComponent],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss',
  providers: [CategoryService],
})
export class CategoryTableComponent extends BaseTableComponent<ICategoryRaw> {
  override pageIndex = 0;
  override pageSize = CATEGORY_PAGE_SIZE;
  override columns = CATEGORY_COLUMNS;
  override displayedColumns = CATEGORY_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CategoryService) {
    super(service);
  }
}
