import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISkuViewRaw } from '@mdtx/common';
import { CardAvatarComponent } from '@mdtx/material/card';
import { InputQuantityComponent } from '@mdtx/material/form';

@Component({
  selector: 'mdtx-pos-product-card',
  standalone: true,
  imports: [CommonModule, CardAvatarComponent, InputQuantityComponent],
  templateUrl: './pos-product-card.component.html',
  styleUrl: './pos-product-card.component.scss',
})
export class PosProductCardComponent {
  @Input() product!: ISkuViewRaw;

  @Output() productUpdateEvent = new EventEmitter<ISkuViewRaw>();

  updateQuantity(quantity: number) {
    this.product.quantity = quantity;
    this.productUpdateEvent.emit(this.product);
  }
}
