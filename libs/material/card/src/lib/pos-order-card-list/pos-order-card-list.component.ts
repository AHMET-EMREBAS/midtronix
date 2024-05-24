import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOrderViewRaw } from '@mdtx/common';
import { PosOrderCardComponent } from '../pos-order-card/pos-order-card.component';

@Component({
  selector: 'mdtx-pos-order-card-list',
  standalone: true,
  imports: [CommonModule, PosOrderCardComponent],
  templateUrl: './pos-order-card-list.component.html',
  styleUrl: './pos-order-card-list.component.scss',
})
export class PosOrderCardListComponent {
  @Input() orderListItems: IOrderViewRaw[] = [];
  @Output() editButtonClickEvent = new EventEmitter<IOrderViewRaw>();
  @Output() deleteButtonClickEvent = new EventEmitter<IOrderViewRaw>();

  editButtonClickEventHandler(item: IOrderViewRaw) {
    this.editButtonClickEvent.emit(item);
  }
  deleteButtonClickEventHandler(item: IOrderViewRaw) {
    this.deleteButtonClickEvent.emit(item);
  }
}
