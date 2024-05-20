import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mdtx-checkout-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './checkout-button.component.html',
  styleUrl: './checkout-button.component.scss',
})
export class CheckoutButtonComponent {
  @Input() subtotal = 'Subtotal Value';
  @Input() total = 'Total Value';
  @Input() label = 'Checkout';
}
