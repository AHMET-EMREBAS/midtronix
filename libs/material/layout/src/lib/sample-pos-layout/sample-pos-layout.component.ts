import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosLayoutModule } from '../pos-layout/pos-layout.module';
import {
  CardAvatarComponent,
  ProductCardComponent,
  ProductSmallCardComponent,
} from '@mdtx/material/card';
import { InputSearchComponent } from '@mdtx/material/form';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ISkuViewRaw } from '@mdtx/common';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'mdtx-sample-pos-layout',
  standalone: true,
  imports: [
    CommonModule,
    PosLayoutModule,
    CardAvatarComponent,
    ProductCardComponent,
    InputSearchComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    ProductCardComponent,
    ProductSmallCardComponent,
  ],
  templateUrl: './sample-pos-layout.component.html',
  styleUrl: './sample-pos-layout.component.scss',
})
export class SamplePosLayoutComponent {
  totalPrice$ = new BehaviorSubject('0');

  productCart = new Map<string, Partial<ISkuViewRaw>>();

  products: Partial<ISkuViewRaw>[] = [
    {
      barcode: '100000000001',
      name: 'First Product',
      price: 100.99,
      quantity: 1,
    },
    {
      barcode: '100000000002',
      name: 'Product Name 2',
      price: 200.99,
      quantity: 1,
    },
    {
      barcode: '100000000003',
      name: 'Product Name 3',
      price: 300.99,
      quantity: 1,
    },
    {
      barcode: '100000000004',
      name: 'Product Name 4',
      price: 400.99,
      quantity: 1,
    },
    {
      barcode: '100000000005',
      name: 'Product Name 5',
      price: 500.99,
      quantity: 1,
    },
    {
      barcode: '100000000006',
      name: 'Product Name 6',
      price: 600.99,
      quantity: 1,
    },
    {
      barcode: '100000000007',
      name: 'Product Name 7',
      price: 700.99,
      quantity: 1,
    },
    {
      barcode: '100000000008',
      name: 'Product Name 8',
      price: 800.99,
      quantity: 1,
    },
    {
      barcode: '100000000009',
      name: 'Product Name 9',
      price: 900.99,
      quantity: 1,
    },
    {
      barcode: '1000000000010',
      name: 'Product Name 10',
      price: 1000.99,
      quantity: 1,
    },
    {
      barcode: '1000000000011',
      name: 'Last Product',
      price: 1100.99,
      quantity: 1,
    },
  ];

  addItemToCart(item: Partial<ISkuViewRaw>) {
    if (this.productCart.get(item.barcode!)) {
      // Item already in the cart
    } else {
      this.productCart.set(item.barcode!, item);
    }
    this.udpateTotalPrice();
  }

  getCartItems() {
    return [...this.productCart.entries()].map(([, value]) => value);
  }

  handleCloseButton(item: Partial<ISkuViewRaw>) {
    this.productCart.delete(item.barcode!);
    this.udpateTotalPrice();
  }

  handleQuantityChange(quantity: any, item: Partial<ISkuViewRaw>) {
    this.productCart.get(item.barcode!)!.quantity = quantity;
    this.udpateTotalPrice();
  }

  udpateTotalPrice() {
    const items = this.getCartItems();
    let totalPrice = 0;
    if (items && items.length > 0) {
      totalPrice = this.getCartItems()
        .map((e) => {
          if (e.quantity && e.price) {
            return e.quantity * e.price;
          }
          return 0;
        })
        .reduce((p, c) => p + c);
    }

    this.totalPrice$.next(totalPrice.toLocaleString());
  }
}
