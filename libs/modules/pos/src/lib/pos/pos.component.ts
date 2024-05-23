/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutButtonComponent } from '@mdtx/material/button';
import { InputPosSearchComponent } from '@mdtx/material/form';
import { PosLayoutModule } from '@mdtx/material/layout';
import { OrderService, OrderViewService, SkuViewService } from '@mdtx/ngrx';
import { firstValueFrom, tap } from 'rxjs';
import { IOrderRaw, IOrderViewRaw, ISkuViewRaw } from '@mdtx/common';
import {
  ProductCardListComponent,
  ProductSmallCardListComponent,
} from '@mdtx/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PriceLevelSearchComponent, StoreSearchComponent } from '@mdtx/forms';
import { OrderCardListComponent } from '../order-card-list/order-card-list.component';
import { MergeStrategy } from '@ngrx/data';

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
  providers: [SkuViewService, OrderService, OrderViewService],
})
export class PosComponent implements AfterViewInit {
  currentOrders = new Map<string, IOrderRaw | IOrderViewRaw>();
  products$ = this.skuViewService.entities$;
  orders$ = this.orderViewService.entities$.pipe(
    tap((data) => {
      for (const o of data) {
        this.currentOrders.set(o.barcode, o);
      }
    })
  );
  cartId = 2;
  storeId = 1;
  priceLevelId = 1;

  constructor(
    protected readonly skuViewService: SkuViewService,
    protected readonly orderViewService: OrderViewService,
    protected readonly orderService: OrderService
  ) {}

  ngAfterViewInit(): void {
    this.skuViewService.getWithQuery({ take: 1000 });
    this.reloadOrderViews();
  }

  reloadOrderViews() {
    this.orderViewService.clearCache();
    this.orderViewService.getWithQuery({
      take: 10000,
      cartId: this.cartId,
    });
  }

  async addProductToCartEventHandler(item: ISkuViewRaw) {
    const found = this.currentOrders.get(item.barcode);

    if (found) {
      const newQuantity = found.quantity + 1;
      this.orderService.update({ id: found.id, quantity: newQuantity });
      this.currentOrders.set(item.barcode, { ...found, quantity: newQuantity });
    } else {
      const saved = await firstValueFrom(
        this.orderService.addOrder({
          cart: { id: this.cartId },
          sku: { id: item.id },
          priceLevel: { id: this.priceLevelId },
          quantity: 1,
        })
      );
      this.currentOrders.set(item.barcode, saved);
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

  __deleteOrder(event: IOrderViewRaw) {
    console.log('Deleting item from current orders.');
    this.currentOrders.delete(event.barcode);
    console.log('Deleting item from Database.');
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
      this.orderService.update({ id: event.id, quantity: event.quantity });
    }
  }
}
