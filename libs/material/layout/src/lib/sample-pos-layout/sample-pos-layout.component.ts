import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosLayoutModule } from '../pos-layout/pos-layout.module';
import {
  CardAvatarComponent,
  ProductCardComponent,
  ProductSmallCardComponent,
} from '@mdtx/material/card';
import {
  InputPosSearchComponent,
  InputSearchComponent,
} from '@mdtx/material/form';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ISkuRaw, ISkuViewRaw } from '@mdtx/common';
import { BehaviorSubject } from 'rxjs';
import { BarcodeViewComponent } from '@mdtx/material/barcode';

import { CheckoutButtonComponent } from '@mdtx/material/button';
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
    InputPosSearchComponent,
    BarcodeViewComponent,
    CheckoutButtonComponent,
  ],
  templateUrl: './sample-pos-layout.component.html',
  styleUrl: './sample-pos-layout.component.scss',
})
export class SamplePosLayoutComponent {
  @ViewChild('inputPosSearch') inputPosSearch!: InputPosSearchComponent;
  totalPrice$ = new BehaviorSubject('0');

  productCart = new Map<string, Partial<ISkuViewRaw>>();

  products: Partial<ISkuViewRaw>[] = [
    {
      barcode: '1000000001',
      name: 'First Product',
      price: 100.99,
      quantity: 1,
    },
    {
      barcode: '1000000002',
      name: 'Product Name 2',
      price: 200.99,
      quantity: 1,
    },
    {
      barcode: '1000000003',
      name: 'Product Name 3',
      price: 300.99,
      quantity: 1,
    },
    {
      barcode: '1000000004',
      name: 'Product Name 4',
      price: 400.99,
      quantity: 1,
    },
    {
      barcode: '1000000005',
      name: 'Product Name 5',
      price: 500.99,
      quantity: 1,
    },
  ];

  addItemToCart(item: Partial<ISkuViewRaw>) {
    const foundItem = this.productCart.get(item.barcode!);
    if (foundItem) {
      foundItem.quantity = (foundItem.quantity ?? 1) + 1;
      this.productCart.delete(item.barcode!);
      this.productCart.set(item.barcode!, foundItem);
      console.log(foundItem);
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

  handleInputEvent(event: string) {
    this.products.find((e) => {
      if (e.barcode === event) {
        this.addItemToCart(e);
        this.inputPosSearch.clear();
      } else {
        // NOT Implemented
      }
    });
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
