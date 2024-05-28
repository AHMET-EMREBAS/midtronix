import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, firstValueFrom, map, of, switchMap, tap } from 'rxjs';
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
  ICustomer,
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
import { PosCheckoutComponent } from './../pos-checkout/pos-checkout.component';
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
    PosCheckoutComponent,
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
  providers: [SkuViewService, CartService, OrderService, OrderViewService],
})
export class PosComponent implements AfterViewInit {
  readonly cartStore = LocalStore.createStore('cart', { debounce: 400 });

  checkoutOpen = false;

  activeCustomer: ICustomer = { id: 1 } as ICustomer;
  activeEmployee: IUser = { id: 1 } as IUser;
  activeStore: IStore = { id: 1 } as IStore;
  activePriceLevel: IPriceLevel = { id: 1, taxrate: 6.25 } as IPriceLevel;
  activeCart!: ICart;

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
    await this.createNewCart();

    this.reloadOrderList();
    this.reloadProductList();

    this.scanControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((search) => {
          if (search) {
            return this.skuViewService
              .getWithQuery({
                storeId: this.activeStore.id,
                cusotmerId: this.activeCustomer.id,
                priceLevelId: this.activePriceLevel.id,
              })
              .pipe(
                map((data) => {
                  console.log(data);
                  return data.filter((e) => {
                    return (
                      e.barcode == search ||
                      e.name.toLowerCase().includes(search.toLowerCase())
                    );
                  });
                })
              );
          }
          return of(search);
        }),
        tap((result) => {
          console.log(result);
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

  // __cartId() {
  //   return parseInt(this.cartStore.get() ?? '1');
  // }

  async __createCart() {
    return await firstValueFrom(
      this.cartService.addCart({
        store: { id: this.activeStore.id },
        customer: { id: this.activeCustomer.id },
        employee: { id: this.activeEmployee.id },
      })
    );
  }
  async createNewCart() {
    const cartId = this.cartStore.get();

    if (cartId) {
      const foundCart = await firstValueFrom(this.cartService.getByKey(cartId));
      console.log('Found Cart: ', foundCart);
      if (foundCart) {
        this.activeCart = foundCart;
      } else {
        this.activeCart = await this.__createCart();
      }

      console.log('Active Cart: ', this.activeCart);
      this.cartStore.set(this.activeCart.id + '');
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

      console.log('Adding Item to Cart : ', event);
      this.orderService.addOrder({
        cart: { id: this.activeCart.id },
        sku: { id: event.skuId },
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
        cartId: this.activeCart.id,
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

  checkoutButtonClickEventHandler() {
    this.checkoutOpen = true;
  }

  closeCheckout() {
    this.checkoutOpen = false;
  }
}
