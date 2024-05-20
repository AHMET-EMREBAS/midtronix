import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'mdtx-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() title = 'Product title';
  @Input() subtitle = 'Product subtitle';
  @Input() description = 'Product description';

  @Input() price = 200.99;

  @Input() primaryButtonLabel = 'Add To Cart';
  @Input() secondaryButtonLabel = 'Details';
  @Input() primaryButtonIcon = 'add_shopping_cart';
  @Input() secondaryButtonIcon = 'info';

  @Output() primaryButtonClickEvent = new EventEmitter();
  @Output() secondaryButtonClickEvent = new EventEmitter();

  handlePrimaryButtonClick() {
    this.primaryButtonClickEvent.emit();
  }
  
  handleSecondaryButtonClick() {
    this.secondaryButtonClickEvent.emit();
  }
}
