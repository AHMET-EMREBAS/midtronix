import { Component } from '@angular/core';
import { ProductService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductToolbarComponent } from '../../toolbars';
import {
  PRODUCT_COLUMNS,
  PRODUCT_DISPLAY_COLUMNS,
  PRODUCT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IProductRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-product-table',
  standalone: true,
  imports: [...TableModules, ProductToolbarComponent],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
  providers: [ProductService],
})
export class ProductTableComponent extends BaseTableComponent<IProductRaw> {
  override pageIndex = 0;
  override pageSize = PRODUCT_PAGE_SIZE;
  override columns = PRODUCT_COLUMNS;
  override displayedColumns = PRODUCT_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ProductService, protected readonly router: Router) {
    super(service);
  }
}
