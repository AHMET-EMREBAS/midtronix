import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'mdtx-checkout-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './checkout-button.component.html',
  styleUrl: './checkout-button.component.scss',
})
export class CheckoutButtonComponent {
  @Input() label = 'Checkout';
  @Input() taxrate = 10.25;
  @Input() subtotal = 0;

  @Output() checkoutButtonClickEvent = new EventEmitter();
  tax = 0;
  total = 0;

  calculateTax() {
    return this.subtotal * this.taxrate;
  }

  calculateTotal() {
    return this.subtotal + this.calculateTax();
  }

  printTax() {
    return this.calculateTax().toLocaleString();
  }

  printSubtotal() {
    return this.subtotal.toLocaleString();
  }
  printTotal() {
    return this.calculateTotal().toLocaleString();
  }
}
