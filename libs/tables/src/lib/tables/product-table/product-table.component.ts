import { Component } from '@angular/core';
import { ProductService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ProductToolbarComponent } from '../../toolbars';
import { IProduct, IProductRaw, ProductTableOption } from '@mdtx/common';
import { Router } from '@angular/router';
import {
  provideAdvanceTableDataService,
  provideAdvanceTableOptions,
} from '@mdtx/material/table';

@Component({
  selector: 'mdtx-product-table',
  standalone: true,
  imports: [...TableModules, ProductToolbarComponent],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
  providers: [
    ProductService,
    provideAdvanceTableOptions<IProduct>({ ...ProductTableOption }),
    provideAdvanceTableDataService(ProductService),
  ],
})
export class ProductTableComponent extends BaseTableComponent<IProductRaw> {
  constructor(service: ProductService, protected readonly router: Router) {
    super(service);
  }
}
