import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PriceLevelService,
  PriceService,
  ProductService,
  QuantityService,
  SkuService,
  SkuViewService,
} from '@mdtx/ngrx';
import {
  PriceFormComponent,
  PriceLevelSearchComponent,
  ProductFormComponent,
  ProductSearchComponent,
  QuantityFormComponent,
  SkuFormComponent,
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
  Observable,
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
  selector: 'mdtx-product-editor',
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
    SkuFormComponent,
  ],
  templateUrl: './product-editor.component.html',
  styleUrl: './product-editor.component.scss',
  providers: [
    ProductService,
    QuantityService,
    PriceLevelService,
    PriceService,
    SkuViewService,
    SkuService,
  ],
})
export class ProductEditorComponent implements AfterViewInit {
  priceLevels$: Observable<IPriceLevel[]> = this.priceLevelService.entities$;
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

  skuViews$ = combineLatest([this.productChange$]).pipe(
    switchMap(([product]) => {
      if (product) {
        return this.skuViewService.getWithQuery({
          storeId: 1,
          priceLevelId: 1,
          productId: product.id,
        });
      }

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
    protected readonly skuService: SkuService,
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
    const id = this.productChange$.getValue()?.id;

    if (id) {
      this.productService
        .update({
          id,
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
    } else {
      this.productService.add(event);
    }
  }

  updateSkuHandler(id: number, event: any) {
    console.log('Update SKU: ', event);
    this.skuService.update({ id, ...event });
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
