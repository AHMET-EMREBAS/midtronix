import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BaseProductCardComponent } from '../__common/base-product-card';

@Component({
  selector: 'mdtx-pos-product-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './pos-product-card.component.html',
  styleUrl: './pos-product-card.component.scss',
})
export class PosProductCardComponent extends BaseProductCardComponent {
  addToCartEventHandler() {
    this.addToCartEvent.emit();
  }
}
