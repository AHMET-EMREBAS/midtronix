import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, OrderViewService } from '@mdtx/ngrx';

import { IOrderViewRaw } from '@mdtx/common';
import { OrderCardComponent } from '../order-card/order-card.component';

@Component({
  selector: 'mdtx-order-card-list',
  standalone: true,
  imports: [CommonModule, OrderCardComponent],
  templateUrl: './order-card-list.component.html',
  styleUrl: './order-card-list.component.scss',
  providers: [OrderViewService, OrderService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderCardListComponent {
  @Input() orders!: IOrderViewRaw[];
  @Input() cartId!: number;
  @Output() updateOrderEvent = new EventEmitter<IOrderViewRaw>();
  @Output() deleteOrderEvent = new EventEmitter<IOrderViewRaw>();
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
}
