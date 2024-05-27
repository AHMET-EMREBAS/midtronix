import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
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
  ISkuView,
  IStore,
} from '@mdtx/common';
import {
  PriceLevelService,
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
  providers: [
    ProductService,
    PriceService,
    QuantityService,
    SkuViewService,
    PriceLevelService,
  ],
})
export class CreateProductComponent implements AfterViewInit {
  currentSku!: ISkuView;
  currentStore!: IStore;

  priceLevels!: IPriceLevel[];
  skuPrices!: ISkuView[];
  skuQuantities!: ISkuView[];

  @ViewChild('productForm') productForm!: ProductFormComponent;
  @ViewChild('priceForm') priceForm!: PriceFormComponent;
  @ViewChild('advancePriceForm') advancePriceForm!: PriceFormComponent;

  @ViewChild('quantityForm') quantityForm!: QuantityFormComponent;

  @ViewChild('stepper') stepper!: MatStepper;

  @ViewChild('productStep') productStep!: MatStep;
  @ViewChild('priceStep') priceStep!: MatStep;
  @ViewChild('quantityStep') quantityStep!: MatStep;
  @ViewChild('advancePriceStep') advancePriceStep!: MatStep;

  savedProduct!: IProduct;

  constructor(
    protected readonly cd: ChangeDetectorRef,
    protected readonly service: ProductService,
    protected readonly skuViewService: SkuViewService,
    protected readonly priceService: PriceService,
    protected readonly quantityService: QuantityService,
    protected readonly priceLevelService: PriceLevelService
  ) {}

  async ngAfterViewInit() {
    this.productStep.completed = false;
    this.priceStep.completed = false;
    this.quantityStep.completed = false;
    this.advancePriceStep.completed = false;

    this.priceLevels = await firstValueFrom(this.priceLevelService.getAll());
  }

  async handlePriceSubmit(price: ICreatePriceDto) {
    for (const sku of this.skuPrices) {
      await firstValueFrom(
        this.priceService
          .update({
            id: sku.priceId,
            cost: price.cost,
            price: price.price,
          })
          .pipe(
            catchError((err, caught) => {
              alert('Could not update the price! Please try again!');
              return of(null);
            })
          )
      );
    }

    this.priceStep.completed = true;
    this.priceStep.editable = false;
    this.stepper.next();
  }

  async handleAdvancePriceSubmit(price: ICreatePriceDto) {
    const found = this.skuPrices.find(
      (e) => e.priceLevelId == price.priceLevel.id
    );
    await firstValueFrom(
      this.priceService
        .update({
          id: found?.priceId,
          cost: price.cost,
          price: price.price,
        })
        .pipe(
          catchError((err, caught) => {
            alert('Could not update the price! Please try again!');
            return of(null);
          })
        )
    );
    this.advancePriceStep.completed = true;
  }

  async handleQuantitySubmit(quantity: IQuantity) {
    await firstValueFrom(
      this.quantityService
        .update({
          id: this.currentSku.quantityId,
          quantity: quantity.quantity,
          store: this.currentStore,
        })
        .pipe(
          catchError((err, caught) => {
            alert('Could not update the price! Please try again!');
            return of(null);
          })
        )
    );
    this.quantityStep.completed = true;
  }

  async handleProductSubmit(product: IProduct) {
    await firstValueFrom(
      this.service.add(product).pipe(
        catchError((err, caught) => {
          alert(
            'Could not save the product! Update the product name and try again!'
          );
          return of(null);
        }),
        map(async (data) => {
          if (data) {
            this.productForm.formReset();
            this.savedProduct = data;
            this.productStep.completed = true;
            this.productStep.editable = false;
            this.stepper.next();

            await firstValueFrom(
              this.skuViewService
                .getWithQuery({
                  productId: this.savedProduct.id,
                  storeId: 1,
                })
                .pipe(
                  map((data) => {
                    if (data) this.skuPrices = data;

                    return data;
                  })
                )
            );

            console.log(this.skuPrices);
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
      this.skuViewService
        .getWithQuery({
          priceLevelId: event.id,
          productId: this.savedProduct.id,
        })
        .pipe(
          catchError(() => {
            alert('Something went wrong while getting the sku-views!');
            return of(null);
          }),
          map((data) => {
            if (data && data.length > 0) {
              this.currentSku = data[0];

              console.log('Current SKU :', data);
              this.advancePriceForm
                .control('price')
                .setValue(this.currentSku.price);
              this.advancePriceForm
                .control('cost')
                .setValue(this.currentSku.cost);
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

              console.log('Current SKU: ', this.currentSku);
              console.log('Current Store: ', this.currentStore);
              this.quantityForm
                .control('quantity')
                .setValue(this.currentSku.quantity);
            }

            return data;
          })
        )
    );
  }

  reset() {
    this.priceForm.formReset();
    this.productForm.formReset();
    this.quantityForm.formReset();
    this.advancePriceForm.formReset();
    this.stepper.reset();
    this.cd.detectChanges();
  }
}
