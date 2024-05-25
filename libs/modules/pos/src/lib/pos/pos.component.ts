import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  debounceTime,
  firstValueFrom,
  map,
  merge,
  of,
  switchMap,
  tap,
} from 'rxjs';
import {
  CustomerSearchComponent,
  PriceLevelSearchComponent,
  StoreSearchComponent,
} from '@mdtx/forms';
import {
  CartService,
  OrderService,
  OrderViewService,
  SkuViewService,
} from '@mdtx/ngrx';
import {
  PosProductCardComponent,
  PosProductCardListComponent,
  PosOrderCardComponent,
  PosOrderCardListComponent,
} from '@mdtx/material/card';
import {
  ICart,
  ICategory,
  ICustomer,
  IOrderRaw,
  IOrderViewRaw,
  IPriceLevel,
  ISkuViewRaw,
  IStore,
  IUser,
  QueryBuilder,
} from '@mdtx/common';
import { FullscreenButtonComponent, LocalStore } from '@mdtx/material/core';
import { InputNumberComponent } from '@mdtx/material/form';
import { PosOrderEditorComponent } from '../pos-order-editor/pos-order-editor.component';

@Component({
  selector: 'mdtx-pos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    StoreSearchComponent,
    PriceLevelSearchComponent,
    CustomerSearchComponent,
    PosProductCardComponent,
    PosProductCardListComponent,
    PosOrderCardComponent,
    PosOrderCardListComponent,
    InputNumberComponent,
    PosOrderEditorComponent,
    FullscreenButtonComponent,
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
  providers: [SkuViewService, CartService, OrderService, OrderViewService],
})
export class PosComponent implements AfterViewInit {
  readonly cartStore = LocalStore.createStore('cart', { debounce: 400 });

  activeCustomer: ICustomer = { id: 1 } as ICustomer;
  activeEmployee: IUser = { id: 1 } as IUser;
  activeStore: IStore = { id: 1 } as IStore;
  activePriceLevel: IPriceLevel = { id: 1, taxrate: 6.25 } as IPriceLevel;

  productListItemsSnapshot: ISkuViewRaw[] = [];
  productListItems$ = this.skuViewService.entities$.pipe(
    debounceTime(200),
    tap((data) => (this.productListItemsSnapshot = data))
  );

  orderListItemsSnapshot: IOrderViewRaw[] = [];
  orderListItems$ = this.orderViewService.entities$.pipe(
    debounceTime(200),
    tap((data) => (this.orderListItemsSnapshot = data))
  );

  readonly messages: string[] = [];

  scanControl = new FormControl('');

  orderUnderUpdate?: IOrderViewRaw;

  constructor(
    protected readonly skuViewService: SkuViewService,
    protected readonly orderService: OrderService,
    protected readonly orderViewService: OrderViewService,
    protected readonly cartService: CartService
  ) {}

  async ngAfterViewInit() {
    this.reloadOrderList();
    this.reloadProductList();
    await this.createNewCart();

    this.scanControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((search) => {
          if (search) {
            return this.skuViewService.getWithQuery({
              barcode: QueryBuilder.EQUAL(search),
              storeId: this.activeStore.id,
              cusotmerId: this.activeCustomer.id,
              priceLevelId: this.activePriceLevel.id,
            });
          }
          return of(search);
        }),
        tap((result) => {
          if (typeof result === 'string') {
            this.skuViewService.getWithQuery({
              name: QueryBuilder.CONTAIN(result),
              storeId: this.activeStore.id,
              cusotmerId: this.activeCustomer.id,
              priceLevelId: this.activePriceLevel.id,
            });
          } else if (result && result.length == 1) {
            const found = result[0];
            if (found) {
              this.addToCartEventHandler(found);
              this.scanControl.setValue(null);
            }
          }
        })
      )
      .subscribe();
  }

  __cartId() {
    return parseInt(this.cartStore.get() ?? '1');
  }

  async createNewCart() {
    const cart = this.cartStore.get();

    if (!cart) {
      const result = await firstValueFrom(
        this.cartService.addCart({
          store: { id: this.activeStore.id },
          customer: { id: this.activeCustomer.id },
          employee: { id: this.activeEmployee.id },
        })
      );
      this.cartStore.set(result.id + '');
    }
  }

  addToCartEventHandler(event: ISkuViewRaw) {
    const foundItem = this.orderListItemsSnapshot.find(
      (e) => e.barcode === event.barcode
    );

    if (foundItem) {
      console.log('Updating Item : ', foundItem);
      const newQuantity = parseInt(foundItem.quantity + '') + 1;
      const price = parseFloat(foundItem.unitPrice + '');
      const subtotal = price * newQuantity;
      const total =
        subtotal + (parseFloat(foundItem.taxrate + '') * subtotal) / 100;

      this.orderService.update({
        id: foundItem.id,
        quantity: newQuantity,
        subtotal: subtotal,
        total: total,
      });
    } else {
      const quantity = 1;
      const unitPrice = parseFloat((event.price ?? 0) + '');
      const subtotal = unitPrice * quantity;
      const taxrate = parseFloat((this.activePriceLevel.taxrate ?? '0') + '');
      const total = subtotal + (taxrate * subtotal) / 100;

      this.orderService.addOrder({
        cart: { id: this.__cartId() },
        sku: { id: event.id },
        quantity,
        taxrate,
        unitPrice,
        subtotal,
        total,
      });
    }
    this.reloadOrderList();
  }

  editButtonClickEventHandler(event: IOrderViewRaw) {
    console.log('Edited : ', event);
    this.orderUnderUpdate = event;
  }

  deleteButtonClickEventHandler(event: IOrderViewRaw) {
    console.log('Deleting Item : ', event);
    this.orderViewService.removeOneFromCache(event);
    this.orderService.delete(event.id);
    this.reloadOrderList();
  }

  reloadProductList() {
    this.skuViewService.getWithQuery(
      {
        take: 10000,
        storeId: this.activeStore.id,
        cusotmerId: this.activeCustomer.id,
        priceLevelId: this.activePriceLevel.id,
      },
      { isOptimistic: false }
    );
  }

  reloadOrderList() {
    this.orderViewService.getWithQuery(
      {
        take: 1000,
        cartId: this.__cartId(),
        storeId: this.activeStore.id,
      },
      { isOptimistic: false }
    );
  }

  updateOrderEventHandler() {
    this.reloadOrderList();
  }

  closeOrderEditorHandler() {
    this.orderUnderUpdate = undefined;
  }
}
