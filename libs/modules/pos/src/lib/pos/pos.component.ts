/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutButtonComponent } from '@mdtx/material/button';
import { InputPosSearchComponent } from '@mdtx/material/form';
import { PosLayoutModule } from '@mdtx/material/layout';

import { SKU_VIEW_OPTION_COLUMN, SkuViewService } from '@mdtx/ngrx';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISkuViewRaw } from '@mdtx/common';
import {
  ProductCardListComponent,
  ProductSmallCardListComponent,
} from '@mdtx/material/card';

@Component({
  selector: 'mdtx-pos',
  standalone: true,
  imports: [
    CommonModule,
    CheckoutButtonComponent,
    InputPosSearchComponent,
    PosLayoutModule,
    ProductCardListComponent,
    ProductSmallCardListComponent,
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
  providers: [SkuViewService],
})
export class PosComponent implements AfterViewInit {
  items$: Observable<ISkuViewRaw[]> = this.skuService.entities$;
  itemsInCart = new Map<string, ISkuViewRaw>();

  subtotal$ = new BehaviorSubject(0);

  constructor(protected readonly skuService: SkuViewService) {}

  handleSearchEvent(search: string) {
    this.skuService.clearCache();
    this.skuService.getWithQuery({
      barcode: search,
      name: search,
      storeId: 1,
      priceLevelId: 1,
    });
  }

  getItemsInCart() {
    if (this.itemsInCart.size > 0) {
      return [...this.itemsInCart.entries()].map(([, value]) => value);
    }
    return undefined;
  }

  ngAfterViewInit(): void {
    this.skuService.clearCache();
    this.skuService.getWithQuery({
      take: 10000,
      storeId: 1,
      priceLevelId: 1,
    });
  }

  handleAddProductToCartEvent(item: ISkuViewRaw) {
    const foundItem = this.itemsInCart.get(item.barcode);

    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
      this.itemsInCart.delete(item.barcode);
      this.itemsInCart.set(foundItem.barcode, foundItem);
    } else {
      this.itemsInCart.set(item.barcode, { ...item, quantity: 1 });
    }
    this.updateTotal();
  }

  handleDeleteProductEvent(skuView: ISkuViewRaw) {
    this.itemsInCart.delete(skuView.barcode);
    this.updateTotal();
  }

  handleQuantityChangeEvent() {
    this.updateTotal();
  }

  updateTotal() {
    const items = this.getItemsInCart();
    const itemPrices = items
      ?.map((e) => parseFloat(e.price + '') * (e.quantity ?? 1))
      .filter((e) => e);

    if (itemPrices && itemPrices.length > 0) {
      const subtotal = itemPrices.reduce((p, c) => p! + c!);
      this.subtotal$.next(subtotal);
    } else {
      this.subtotal$.next(0);
    }
  }
}
