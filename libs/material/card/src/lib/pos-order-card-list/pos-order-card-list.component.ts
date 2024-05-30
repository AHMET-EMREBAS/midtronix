import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOrderViewRaw } from '@mdtx/common';
import { PosOrderCardComponent } from '../pos-order-card/pos-order-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mdtx-pos-order-card-list',
  standalone: true,
  imports: [
    CommonModule,
    PosOrderCardComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './pos-order-card-list.component.html',
  styleUrl: './pos-order-card-list.component.scss',
})
export class PosOrderCardListComponent {
  @Input() orderListItems: IOrderViewRaw[] = [];
  @Output() editButtonClickEvent = new EventEmitter<IOrderViewRaw>();
  @Output() deleteButtonClickEvent = new EventEmitter<IOrderViewRaw>();

  @Output() checkoutButtonClickEvent = new EventEmitter();

  editButtonClickEventHandler(item: IOrderViewRaw) {
    this.editButtonClickEvent.emit(item);
  }

  deleteButtonClickEventHandler(item: IOrderViewRaw) {
    this.deleteButtonClickEvent.emit(item);
  }

  getSubtotal() {
    if (this.orderListItems && this.orderListItems.length > 0)
      return this.orderListItems
        .map((e) => {
          return parseFloat(e.subtotal + '');
        })
        .reduce((p, c) => p + c) as number;

    return 0;
  }

  getTotal() {
    if (this.orderListItems && this.orderListItems.length > 0)
      return this.orderListItems
        .map((e) => {
          return parseFloat(e.total + '');
        })
        .reduce((p, c) => p + c) as number;

    return 0;
  }

  getQuantity() {
    if (this.orderListItems && this.orderListItems.length > 0)
      return this.orderListItems
        .map((e) => parseInt(e.quantity + ''))
        .reduce((p, c) => p + c);

    return 0;
  }

  checkoutButtonClickEventHandler() {
    this.checkoutButtonClickEvent.emit();
  }
}
