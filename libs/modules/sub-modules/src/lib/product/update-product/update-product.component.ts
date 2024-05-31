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
  StoreSearchComponent,
} from '@mdtx/forms';
import {
  ICreatePriceDto,
  ICreateQuantityDto,
  IPriceLevel,
  IProduct,
  IQuantity,
  ISkuView,
  IStore,
} from '@mdtx/common';
import { MatTabsModule } from '@angular/material/tabs';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  combineLatestAll,
  debounceTime,
  forkJoin,
  map,
  merge,
  of,
  switchMap,
  zip,
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
    StoreSearchComponent,
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
  priceLevelChange$ = new BehaviorSubject<IPriceLevel | null>(null);
  storeChange$ = new BehaviorSubject<IStore | null>(null);
  activeQuantity$ = new BehaviorSubject<IQuantity | null>(null);

  activeProduct$ = this.productChange$.pipe(debounceTime(500));
  activePriceLevel$ = this.priceLevelChange$.pipe(debounceTime(500));
  activePrice$ = merge(this.activeProduct$, this.activePriceLevel$).pipe(
    debounceTime(500),
    map(() => {
      return of({ price: 100, cost: 100 });
    })
  );

  skuChange$ = new BehaviorSubject<ISkuView | null>(null);

  skus$ = combineLatest([
    this.productChange$,
    this.priceLevelChange$,
    this.storeChange$,
  ]).pipe(
    switchMap(([product, priceLevel, store]) => {
      if (product && priceLevel && store) {
        return this.skuViewService.getWithQuery({
          storeId: store.id,
          priceLevelId: priceLevel.id,
          productId: product.id,
        });
      }
      console.log('SKUS : ', product, priceLevel, store);
      return of(null);
    })
  );

  priceSkus$ = combineLatest([
    this.productChange$,
    this.priceLevelChange$,
  ]).pipe(
    switchMap(([product, priceLevel]) => {
      if (product && priceLevel) {
        return this.skuViewService.getWithQuery({
          storeId: 1,
          priceLevelId: priceLevel.id,
          productId: product.id,
        });
      }
      return of(null);
    })
  );

  quantitySkus$ = combineLatest([this.productChange$, this.storeChange$]).pipe(
    switchMap(([product, store]) => {
      if (product && store) {
        return this.skuViewService.getWithQuery({
          storeId: store.id,
          priceLevelId: 1,
          productId: product.id,
        });
      }
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

  selectProductEventHandler(event: IProduct) {
    this.productChange$.next(event);
  }

  selectPriceLevelEventHandler(event: any) {
    console.log('Selected Price Level : ', event);

    this.priceLevelChange$.next(event);
  }

  selectStoreEventHandler(event: any) {
    console.log('Selected Store : ', event);

    this.storeChange$.next(event);
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
        map(() => {
          this.productChange$.next(null);
        })
      );
  }

  updatePrice(id: number, event: Pick<ICreatePriceDto, 'price' | 'cost'>) {
    console.log('Update Price: ', event);
    this.priceService.update({ id, ...event });
  }

  updateQuantity(id: number, event: Pick<ICreateQuantityDto, 'quantity'>) {
    console.log('Update Quantity: ', event);
    this.quantityService.update({ id, ...event });
  }
}
