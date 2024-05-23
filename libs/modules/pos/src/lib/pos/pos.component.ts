/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutButtonComponent } from '@mdtx/material/button';
import { InputPosSearchComponent } from '@mdtx/material/form';
import { PosLayoutModule } from '@mdtx/material/layout';
import {
  CartService,
  OrderService,
  OrderViewService,
  SkuViewService,
} from '@mdtx/ngrx';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  firstValueFrom,
  forkJoin,
  map,
  switchMap,
  tap,
} from 'rxjs';
import {
  IOrderRaw,
  IOrderViewRaw,
  ISkuViewRaw,
  QueryBuilder,
} from '@mdtx/common';
import {
  ProductCardListComponent,
  ProductSmallCardListComponent,
} from '@mdtx/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PriceLevelSearchComponent, StoreSearchComponent } from '@mdtx/forms';
import { OrderCardListComponent } from '../order-card-list/order-card-list.component';

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
    OrderCardListComponent,
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
  providers: [SkuViewService, OrderService, OrderViewService, CartService],
})
export class PosComponent implements AfterViewInit {
  carts$ = this.cartService.entities$;

  @ViewChild('posSearchComponentRef')
  posSearchComponentRef!: InputPosSearchComponent;
  currentOrders = new Map<string, IOrderViewRaw>();
  products$ = this.skuViewService.entities$;
  orders$ = this.orderViewService.entities$.pipe(
    tap((data) => {
      for (const o of data) {
        this.currentOrders.set(o.barcode, o);
      }
    })
  );
  @Input() cartId = 2;
  @Input() storeId = 1;
  @Input() priceLevelId = 1;

  posSearchEventObserver$!: Observable<any>;

  constructor(
    protected readonly skuViewService: SkuViewService,
    protected readonly orderViewService: OrderViewService,
    protected readonly orderService: OrderService,
    protected readonly cartService: CartService
  ) {}

  ngAfterViewInit(): void {
    this.skuViewService.getWithQuery({ take: 1000 });
    this.reloadOrderViews();

    this.posSearchEventObserver$ = this.posSearchComponentRef.$valueChange.pipe(
      switchMap((search) => {
        this.skuViewService.clearCache();
        return forkJoin([
          this.skuViewService.getWithQuery({
            barcode: QueryBuilder.EQUAL(search),
            cartId: this.cartId,
            priceLevelId: this.priceLevelId,
            storeId: this.storeId,
          }),
          this.skuViewService.getWithQuery({
            name: QueryBuilder.CONTAIN(search),
            cartId: this.cartId,
            priceLevelId: this.priceLevelId,
            storeId: this.storeId,
          }),
        ]).pipe(debounceTime(600));
      }),
      map(([set1, set2]) => {
        const data = set1.length == 1 ? set1 : set2;
        if (data.length == 1) {
          const foundItem = data[0];
          this.addProductToCartEventHandler(foundItem);
          this.posSearchComponentRef.inputControl.setValue('');
        }
      })
    );
  }

  reloadOrderViews() {
    this.orderViewService.clearCache();
    this.orderViewService.getWithQuery({
      take: 10000,
      cartId: this.cartId,
      storeId: this.storeId,
      priceLevelId: this.priceLevelId,
    });
  }

  async addProductToCartEventHandler(item: ISkuViewRaw) {
    const found = this.currentOrders.get(item.barcode);

    if (found) {
      const newQuantity = parseFloat(found.quantity + '') + 1;
      this.orderService.update(
        this.__calculateSaleSubtotal({
          ...found,
          quantity: newQuantity,
        })
      );
      this.currentOrders.set(item.barcode, { ...found, quantity: newQuantity });
    } else {
      const saved = await firstValueFrom(
        this.orderService.addOrder({
          cart: { id: this.cartId },
          sku: { id: item.id },
          priceLevel: { id: this.priceLevelId },
          taxrate: 6.25,
          quantity: 1,
          salePrice: item.price,
          saleSubtotal: parseFloat(item.price + ''),
          saleTotal: item.price * 1 + (item.price * 6.25) / 100,
        })
      );
      this.currentOrders.set(item.barcode, saved as unknown as IOrderViewRaw);
    }

    this.reloadOrderViews();
  }

  updateOrderEventHandler(event: IOrderViewRaw) {
    this.__updateOrderQuantity(event);
    this.reloadOrderViews();
  }

  deleteOrderEventHandler(event: IOrderViewRaw) {
    this.__deleteOrder(event);
    this.reloadOrderViews();
  }

  deleteAllOrdersHandler(event: IOrderViewRaw[]) {
    if (event && event.length > 0) {
      for (let i = 0; i < event.length; i++) {
        setTimeout(() => {
          this.__deleteOrder(event[i]);
          this.reloadOrderViews();
        }, 100 * i);
      }
    }
  }

  __deleteOrder(event: IOrderViewRaw) {
    this.currentOrders.delete(event.barcode);
    this.orderService.deleteItem(event.id);
  }

  __updateOrderQuantity(event: IOrderViewRaw) {
    const newQuantity = event.quantity;
    if (newQuantity <= 0) {
      this.__deleteOrder(event);
    } else {
      console.log('Updating item from current list.');
      this.currentOrders.set(event.barcode, event);
      console.log('Updating item from Database.');
      this.orderService.update(this.__calculateSaleSubtotal(event));
    }
  }

  __calculateSaleSubtotal(event: IOrderViewRaw): IOrderViewRaw {
    const subtotal =
      parseFloat(event.salePrice + '') * parseFloat(event.quantity + '');

    const tax = (subtotal * event.taxrate) / 100;
    const total = tax + subtotal;

    console.table({
      subtotal,
      tax,
      total,
    });
    return {
      ...event,
      salePrice: event.salePrice,
      saleSubtotal: subtotal,
      saleTotal: total,
    };
  }

  getCartSubtotal() {
    return;
  }
}
