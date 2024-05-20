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
  @Input() subtotal = 'Subtotal Value';
  @Input() total: string | null = 'Total Value';
  @Input() label: string | null = 'Checkout';

  @Output() checkoutButtonClickEvent = new EventEmitter();
}
