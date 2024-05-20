import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputQuantityComponent } from '@mdtx/material/form';
@Component({
  selector: 'mdtx-product-small-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    InputQuantityComponent,
  ],
  templateUrl: './product-small-card.component.html',
  styleUrl: './product-small-card.component.scss',
})
export class ProductSmallCardComponent {
  @Input() title = 'Product title';
  @Input() subtitle = '87874199912';
  @Input() description = 'Product description';

  @Input() unitPrice = 500.99;
  @Input() totalPrice = 99999.99;
  @Input() quantity = 1;

  @Output() quantityValueChange = new EventEmitter();
  @Output() closeButtonClick = new EventEmitter();

  @Input() showCloseButton = true;

  quantityValueChangeHandler(event: number) {
    this.quantityValueChange.emit(event);
  }

  handleCloseButtonClick() {
    this.closeButtonClick.emit();
  }

  calculateTotalPrice(quantity: number, uprice: number) {
    return (quantity * uprice).toFixed(2);
  }
}
