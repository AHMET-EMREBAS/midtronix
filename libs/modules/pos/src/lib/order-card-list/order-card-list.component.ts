import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, OrderViewService } from '@mdtx/ngrx';

import { IOrderViewRaw } from '@mdtx/common';
import { OrderCardComponent } from '../order-card/order-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'mdtx-order-card-list',
  standalone: true,
  imports: [
    CommonModule,
    OrderCardComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './order-card-list.component.html',
  styleUrl: './order-card-list.component.scss',
  providers: [OrderViewService, OrderService],
})
export class OrderCardListComponent {
  @Input() orders!: IOrderViewRaw[];
  @Input() cartId!: number;
  @Output() updateOrderEvent = new EventEmitter<IOrderViewRaw>();
  @Output() deleteOrderEvent = new EventEmitter<IOrderViewRaw>();
  @Output() deleteAllOrdersEvent = new EventEmitter<IOrderViewRaw[]>();
  @Output() reloadOrdersEvent = new EventEmitter();

  constructor(protected readonly dialog: MatDialog) {}
  getCount() {
    if (this.orders && this.orders.length > 0) {
      return this.orders
        .map((e) => e.quantity)
        .reduce((p, c) => p + c) as number;
    }

    return 0;
  }

  quantityEventHandler(event: 1 | -1, order: IOrderViewRaw) {
    this.updateOrderEvent.emit({ ...order, quantity: order.quantity + event });
  }

  deleteEventHandler(order: IOrderViewRaw) {
    this.deleteOrderEvent.emit(order);
  }

  deleteAllEventHandler() {
    this.deleteAllOrdersEvent.emit(this.orders);
  }

  updateEventHandler() {
    this.reloadOrdersEvent.emit();
  }

  getSubtotal() {
    if (this.orders.length > 0) {
      return this.orders
        .map((e) => parseFloat(e.salePrice + '') * parseFloat(e.quantity + ''))
        .reduce((p, c) => p + c) as number;
    }
    return 0;
  }

  getTax() {
    return this.getSubtotal() * (6.25 / 100);
  }

  getTotal() {
    return this.getSubtotal() + this.getTax();
  }

  handleCheckout() {
    const d = this.dialog.open(CheckoutComponent, {
      data: {
        orders: this.orders,
        cartId: this.cartId,
      },
    });
  }
}
