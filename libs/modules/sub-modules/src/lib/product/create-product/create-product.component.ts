import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PriceFormComponent,
  ProductFormComponent,
  QuantityFormComponent,
} from '@mdtx/forms';
import { ICreatePriceDto, IPriceLevel, IProduct } from '@mdtx/common';
import { PriceService, ProductService, QuantityService } from '@mdtx/ngrx';

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'mdtx-create-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductFormComponent,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    PriceFormComponent,
    QuantityFormComponent,
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
  providers: [ProductService, PriceService, QuantityService],
})
export class CreateProductComponent {
  constructor(protected readonly service: ProductService) {}
  handleSubmit(product: IProduct) {
    this.service.add(product);
  }

  priceFormChangeEventHandler(event: ICreatePriceDto) {
    console.log(event);
  }

  priceLevelChangeEventHandler(event: IPriceLevel) {
    console.log('PriceLevelChange: ', event);
  }
}
