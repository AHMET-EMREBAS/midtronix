import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ISkuViewRaw } from '@mdtx/common';

@Component({
  selector: 'mdtx-product-card-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  @Input() products!: ISkuViewRaw[];
  @Output() addProductToCartEvent = new EventEmitter<ISkuViewRaw>();
  @Output() viewProductDetailsEvent = new EventEmitter<ISkuViewRaw>();
}
