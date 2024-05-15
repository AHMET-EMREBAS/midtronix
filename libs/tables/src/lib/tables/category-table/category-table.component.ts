import { Component } from '@angular/core';
import { CategoryService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CategoryToolbarComponent } from '../../toolbars';
import {
  CATEGORY_COLUMNS,
  CATEGORY_DISPLAY_COLUMNS,
  CATEGORY_PAGE_SIZE,
} from '../../table-options';
import { ICategory } from '@mdtx/common';

@Component({
  selector: 'mdtx-category-table',
  standalone: true,
  imports: [...TableModules, CategoryToolbarComponent],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss',
  providers: [CategoryService],
})
export class CategoryTableComponent extends BaseTableComponent<ICategory> {
  pageIndex = 0;
  pageSize = CATEGORY_PAGE_SIZE;
  columns = CATEGORY_COLUMNS;
  displayedColumns = CATEGORY_DISPLAY_COLUMNS;

  constructor(service: CategoryService) {
    super(service);
  }
}
