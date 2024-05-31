import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PriceLevelService,
  PriceService,
  ProductService,
  QuantityService,
  SkuViewService,
} from '@mdtx/ngrx';
import {
  PriceFormComponent,
  PriceLevelSearchComponent,
  ProductFormComponent,
  ProductSearchComponent,
  QuantityFormComponent,
} from '@mdtx/forms';
import { IPriceLevel, IProduct } from '@mdtx/common';
import { MatTabsModule } from '@angular/material/tabs';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  map,
  of,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'mdtx-update-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductSearchComponent,
    MatTabsModule,
    ProductFormComponent,
    PriceFormComponent,
    QuantityFormComponent,
    PriceLevelSearchComponent,
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss',
  providers: [
    ProductService,
    QuantityService,
    PriceLevelService,
    PriceService,
    SkuViewService,
  ],
})
export class UpdateProductComponent implements AfterViewInit {
  priceLevels$ = this.priceLevelService.entities$;

  productChange$ = new BehaviorSubject<IProduct | null>(null);
  activeProduct$ = this.productChange$.pipe(debounceTime(500));
  skues$ = this.activeProduct$.pipe(
    switchMap((product) => {
      if (product)
        return this.skuViewService.getWithQuery({ productId: product.id });

      return of(null);
    })
  );

  constructor(
    protected readonly productService: ProductService,
    protected readonly quantityService: QuantityService,
    protected readonly priceService: PriceService,
    protected readonly skuViewService: SkuViewService,
    protected readonly priceLevelService: PriceLevelService
  ) {}

  ngAfterViewInit(): void {
    this.priceLevelService.getWithQuery({ take: 1000 });
  }

  selectedEventHandler(event: IProduct) {
    this.productChange$.next(event);
  }

  updateProductHandler(event: any) {
    this.productService
      .update({
        id: this.productChange$.getValue()?.id,
        ...event,
      })
      .pipe(
        catchError((err, caught) => {
          console.log(err);
          return caught;
        }),
        map((result) => {
          this.productChange$.next(null);
        })
      );
  }

  priceFormCurrentValue(pl: IPriceLevel) {}

  selectPriceLevelHandler(event: any) {
    console.log('Price LEvel : ', event);
  }
}
