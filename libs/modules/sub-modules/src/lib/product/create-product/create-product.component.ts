import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PriceFormComponent,
  ProductFormComponent,
  QuantityFormComponent,
} from '@mdtx/forms';
import {
  ICreatePriceDto,
  IPrice,
  IPriceLevel,
  IProduct,
  IQuantity,
  ISku,
  ISkuView,
  IStore,
} from '@mdtx/common';
import {
  PriceService,
  ProductService,
  QuantityService,
  SkuViewService,
} from '@mdtx/ngrx';

import {
  MatStep,
  MatStepper,
  MatStepperModule,
} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { catchError, firstValueFrom, of, map } from 'rxjs';

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
  providers: [ProductService, PriceService, QuantityService, SkuViewService],
})
export class CreateProductComponent implements AfterViewInit {
  currentSku!: ISkuView;
  currentStore!: IStore;

  @ViewChild('productForm') productForm!: ProductFormComponent;
  @ViewChild('priceForm') priceForm!: PriceFormComponent;
  @ViewChild('quantityForm') quantityForm!: QuantityFormComponent;

  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('productStep') productStep!: MatStep;
  @ViewChild('priceStep') priceStep!: MatStep;
  @ViewChild('quantityStep') quantityStep!: MatStep;

  savedProduct!: IProduct;
  constructor(
    protected readonly service: ProductService,
    protected readonly skuViewService: SkuViewService,
    protected readonly priceService: PriceService,
    protected readonly quantityService: QuantityService
  ) {}

  ngAfterViewInit(): void {
    this.productStep.completed = false;
    this.priceStep.completed = false;
    this.quantityStep.completed = false;
  }

  async handlePriceSubmit(price: IPrice) {
    await firstValueFrom(
      this.priceService.add({ ...price, sku: { id: this.currentSku.id } }).pipe(
        catchError((err, caught) => {
          alert('Could not update the price! Please try again!');
          return of(null);
        }),
        map((data) => {
          if (data) {
            // Do Nothing
          }

          return data;
        })
      )
    );
  }

  async handleQuantitySubmit(quantity: IQuantity) {
    await firstValueFrom(
      this.quantityService.update({}).pipe(
        catchError((err, caught) => {
          alert('Could not update the price! Please try again!');
          return of(null);
        }),
        map((data) => {
          if (data) {
            // Do Nothing
          }

          return data;
        })
      )
    );
  }

  async handleProductSubmit(product: IProduct) {
    const result = await firstValueFrom(
      this.service.add(product).pipe(
        catchError((err, caught) => {
          alert(
            'Could not save the product! Update the product name and try again!'
          );
          return of(null);
        }),
        map((data) => {
          if (data) {
            this.productForm.formReset();
            this.savedProduct = data;
            this.productStep.completed = true;
            this.productStep.editable = false;
            this.stepper.next();
          }
          return data;
        })
      )
    );
  }

  priceFormChangeEventHandler(event: ICreatePriceDto) {
    console.log(event);
  }

  async priceLevelChangeEventHandler(event: IPriceLevel) {
    await firstValueFrom(
      this.skuViewService.getWithQuery({ priceLevelId: event.id }).pipe(
        catchError(() => {
          alert('Something went wrong while getting the sku-views!');
          return of(null);
        }),
        map((data) => {
          if (data && data.length > 0) {
            this.currentSku = data[0];
            this.priceForm.control('price').setValue(this.currentSku.price);
            this.priceForm.control('cost').setValue(this.currentSku.cost);
          }

          return data;
        })
      )
    );
  }

  async storeChangeEventHandler(event: IStore) {
    await firstValueFrom(
      this.skuViewService
        .getWithQuery({
          productId: this.savedProduct.id,
          storeId: event.id,
        })
        .pipe(
          catchError(() => {
            alert('Something went wrong while getting the sku-views!');
            return of(null);
          }),
          map((data) => {
            if (data && data.length > 0) {
              this.currentStore = event;
              this.currentSku = data[0];

              this.quantityForm
                .control('quantity')
                .setValue(this.currentSku.quantity);
            }

            return data;
          })
        )
    );
  }
}
