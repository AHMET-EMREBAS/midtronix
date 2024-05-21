import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSmallCardComponent } from '../product-small-card/product-small-card.component';
import { ISkuViewRaw } from '@mdtx/common';

@Component({
  selector: 'mdtx-product-small-card-list',
  standalone: true,
  imports: [CommonModule, ProductSmallCardComponent],
  templateUrl: './product-small-card-list.component.html',
  styleUrl: './product-small-card-list.component.scss',
})
export class ProductSmallCardListComponent implements OnChanges {
  @Input() products!: ISkuViewRaw[];

  @Output() totalChangeEvent = new EventEmitter<number>();

  @Output() deleteProductEvent = new EventEmitter<ISkuViewRaw>();

  @Output() quantityChangeEvent = new EventEmitter<ISkuViewRaw>();

  __calculateTotal() {
    if (this.products && this.products.length > 0) {
      const total = this.products
        .map((e) => e.price * e.quantity)
        .reduce((p, c) => p + c);
      this.totalChangeEvent.emit(total);
    }
  }

  calculateTotal(quantity: number, item: ISkuViewRaw) {
    item.quantity = quantity;
    this.__calculateTotal();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.__calculateTotal();
  }

  deleteProductEventHandler(event: ISkuViewRaw) {
    this.calculateTotal(0, event);
    this.deleteProductEvent.emit(event);
  }

  handleQuantityChangeEvent(quantity: number, item: ISkuViewRaw) {
    this.calculateTotal(quantity, item);
    this.quantityChangeEvent.emit(item);
  }
}
