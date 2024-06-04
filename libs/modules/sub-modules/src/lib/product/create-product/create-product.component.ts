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
  // @ViewChild('advancePriceForm') advancePriceForm!: PriceFormComponent;

  @ViewChild('quantityForm') quantityForm!: QuantityFormComponent;

  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('productStep') productStep!: MatStep;
  @ViewChild('priceStep') priceStep!: MatStep;

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

      this.reset();
    }

    this.priceStep.completed = true;
    this.priceStep.editable = false;
    this.stepper.next();
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

  reset() {
    this.productForm.formReset();
    this.priceForm?.formReset();
    this.quantityForm?.formReset();
    this.stepper.reset();
  }
}
