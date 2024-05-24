import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosProductCardComponent } from '../pos-product-card/pos-product-card.component';
import { ISkuViewRaw } from '@mdtx/common';
@Component({
  selector: 'mdtx-pos-product-card-list',
  standalone: true,
  imports: [CommonModule, PosProductCardComponent],
  templateUrl: './pos-product-card-list.component.html',
  styleUrl: './pos-product-card-list.component.scss',
})
export class PosProductCardListComponent {
  @Input() productListItems: ISkuViewRaw[] = [];

  @Output() addToCartEvent = new EventEmitter<ISkuViewRaw>();

  addToCartEventHandler(item: ISkuViewRaw) {
    this.addToCartEvent.emit(item);
  }
}
