import { Component } from '@angular/core';
import { CartService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { CartToolbarComponent } from '../../toolbars';
import {
  CART_COLUMNS,
  CART_DISPLAY_COLUMNS,
  CART_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { ICartRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-cart-table',
  standalone: true,
  imports: [...TableModules, CartToolbarComponent],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.scss',
  providers: [CartService],
})
export class CartTableComponent extends BaseTableComponent<ICartRaw> {
  override pageIndex = 0;
  override pageSize = CART_PAGE_SIZE;
  override columns = CART_COLUMNS;
  override displayedColumns = CART_DISPLAY_COLUMNS;
  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: CartService, protected readonly router: Router) {
    super(service);
  }
}
