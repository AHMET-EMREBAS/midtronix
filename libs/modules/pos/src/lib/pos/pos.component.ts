/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutButtonComponent } from '@mdtx/material/button';
import { InputPosSearchComponent } from '@mdtx/material/form';
import { PosLayoutModule } from '@mdtx/material/layout';
import { SkuViewService } from '@mdtx/ngrx';
import { BehaviorSubject, Observable, debounceTime, merge, tap } from 'rxjs';
import {
  IPriceLevelRaw,
  ISkuViewRaw,
  IStoreRaw,
  QueryOprator,
  createQueryValue,
} from '@mdtx/common';
import {
  ProductCardListComponent,
  ProductSmallCardListComponent,
} from '@mdtx/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PriceLevelSearchComponent, StoreSearchComponent } from '@mdtx/forms';

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
    MatButtonModule,
    MatIconModule,
    StoreSearchComponent,
    PriceLevelSearchComponent,
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
  providers: [SkuViewService],
})
export class PosComponent implements AfterViewInit {
  @ViewChild('storeSearch') storeSearch!: StoreSearchComponent;
  @ViewChild('priceLevelSearch') priceLevelSearch!: PriceLevelSearchComponent;
  @ViewChild('barcodeSearch') barcodeSearch!: InputPosSearchComponent;

  searchObserver$!: Observable<any>;

  items$: Observable<ISkuViewRaw[]> = this.skuService.entities$.pipe(
    tap((data) => {
      if (data.length === 1) {
        this.handleAddProductToCartEvent(data[0]);
      }
    })
  );

  itemsInCart = new Map<string, ISkuViewRaw>();

  defaultStore?: IStoreRaw;
  defaultPriceLevel?: IPriceLevelRaw;

  subtotal$ = new BehaviorSubject(0);

  constructor(protected readonly skuService: SkuViewService) {}

  ngAfterViewInit(): void {
    this.skuService.clearCache();
    this.updateProductList();

    this.searchObserver$ = merge(
      this.barcodeSearch.$valueChange,
      this.storeSearch.inputControl.valueChanges,
      this.priceLevelSearch.inputControl.valueChanges
    ).pipe(
      debounceTime(600),
      tap(() => {
        const items = this.getItemsInCart();
        if (items) {
          for (const item of items) {

            console.log("Updating M>...")
            this.skuService.getWithQuery({
              barcode: item.barcode,
              storeId: this.storeSearch.inputControl.value?.id ?? 1,
              priceLevelId: this.priceLevelSearch.inputControl.value?.id ?? 1,
            });
          }
        }

        console.log('Updating Something');
      })
    );
  }

  updateProductList() {
    this.skuService.getWithQuery({
      take: 10000,
      storeId: this.storeSearch.inputControl.value?.id ?? 1,
      priceLevelId: this.priceLevelSearch.inputControl.value?.id ?? 1,
    });
  }

  handleSearchEvent(search: string) {
    this.skuService.clearCache();
    this.skuService.getWithQuery({
      barcode: createQueryValue({
        operator: QueryOprator.EQUAL,
        value: search,
      }),
      storeId: this.storeSearch.inputControl.value?.id ?? 1,
      priceLevelId: this.priceLevelSearch.inputControl.value?.id ?? 1,
    });
  }

  getItemsInCart() {
    if (this.itemsInCart.size > 0) {
      return [...this.itemsInCart.entries()].map(([, value]) => value);
    }
    return undefined;
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

    this.barcodeSearch.inputControl.setValue('');
    this.updateProductList();
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
