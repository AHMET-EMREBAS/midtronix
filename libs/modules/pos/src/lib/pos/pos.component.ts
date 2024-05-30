/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  BehaviorSubject,
  Subscription,
  catchError,
  debounceTime,
  firstValueFrom,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import {
  CustomerSearchComponent,
  PriceLevelSearchComponent,
  StoreSearchComponent,
} from '@mdtx/forms';
import {
  CartService,
  OrderService,
  OrderViewService,
  SaleService,
  SkuViewService,
} from '@mdtx/ngrx';
import {
  PosProductCardComponent,
  PosProductCardListComponent,
  PosOrderCardComponent,
  PosOrderCardListComponent,
} from '@mdtx/material/card';
import {
  ICart,
  ICreateSaleDto,
  IOrderViewRaw,
  IPriceLevel,
  ISkuViewRaw,
  QueryBuilder,
} from '@mdtx/common';
import { FullscreenButtonComponent } from '@mdtx/material/core';
import { InputNumberComponent } from '@mdtx/material/form';
import { PosOrderEditorComponent } from '../pos-order-editor/pos-order-editor.component';
import { PosCheckoutComponent } from './../pos-checkout/pos-checkout.component';
import { MatDialogModule } from '@angular/material/dialog';
import {
  posCartIdStore,
  posCustomerIdStore,
  posEmployeeIdStore,
  posPriceLevelIdStore,
  posStoreIdStore,
  posTaxrateStore,
} from '../__stores';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'mdtx-pos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    StoreSearchComponent,
    PriceLevelSearchComponent,
    CustomerSearchComponent,
    PosProductCardComponent,
    PosProductCardListComponent,
    PosOrderCardComponent,
    PosOrderCardListComponent,
    InputNumberComponent,
    PosOrderEditorComponent,
    FullscreenButtonComponent,
    PosCheckoutComponent,
    MatDialogModule,
    PriceLevelSearchComponent,
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
  providers: [
    SkuViewService,
    CartService,
    OrderService,
    OrderViewService,
    SaleService,
  ],
})
export class PosComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('priceLevelSearchRef')
  priceLevelSearchRef!: PriceLevelSearchComponent;
  sub!: Subscription;
  checkoutOpen = false;

  refreshOrderList$ = this.orderService.entityActions$.pipe(
    map((event) => {
      this.reloadOrderList();
    })
  );

  storeId = +posStoreIdStore.get()!;
  employeeId = +posEmployeeIdStore.get()!;
  customerId = +posCustomerIdStore.get()!;
  priceLevelId = +posPriceLevelIdStore.get()!;
  taxrate = +posTaxrateStore.get()!;

  activeCart!: ICart;

  productListItemsSnapshot: ISkuViewRaw[] = [];
  productListItems$ = this.skuViewService.entities$.pipe(
    tap((data) => (this.productListItemsSnapshot = data))
  );

  orderListItemsSnapshot: IOrderViewRaw[] = [];
  orderListItems$ = this.orderViewService.entities$.pipe(
    tap((data) => (this.orderListItemsSnapshot = data))
  );

  readonly messages: string[] = [];

  isReady = false;

  scanControl = new FormControl('');

  orderUnderUpdate?: IOrderViewRaw;

  constructor(
    protected readonly skuViewService: SkuViewService,
    protected readonly orderService: OrderService,
    protected readonly orderViewService: OrderViewService,
    protected readonly cartService: CartService,
    protected readonly saleService: SaleService,
    protected readonly router: Router,
    protected readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isReady = !!(
      this.customerId > 0 &&
      this.employeeId > 0 &&
      this.storeId > 0 &&
      this.priceLevelId > 0
    );

    if (!this.isReady) {
      this.router.navigate(['setting'], { relativeTo: this.route });
    }
  }

  async ngAfterViewInit() {
    if (!this.isReady) return;

    await this.createNewCart();

    this.reloadOrderList();
    this.reloadProductList();

    this.sub = this.scanControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((search) => {
          if (search) {
            return this.skuViewService
              .getWithQuery({
                storeId: this.storeId!,
                cusotmerId: this.customerId!,
                priceLevelId: this.priceLevelId!,
              })
              .pipe(
                map((data) => {
                  console.log(data);
                  return data.filter((e) => {
                    return (
                      e.barcode == search ||
                      e.name.toLowerCase().includes(search.toLowerCase())
                    );
                  });
                })
              );
          }
          return of(search);
        }),
        tap((result) => {
          console.log(result);
          if (typeof result === 'string') {
            this.skuViewService.getWithQuery({
              name: QueryBuilder.CONTAIN(result),
              storeId: this.storeId!,
              cusotmerId: this.customerId!,
              priceLevelId: this.priceLevelId!,
            });
          } else if (result && result.length == 1) {
            const found = result[0];
            if (found) {
              this.addToCartEventHandler(found);
              this.scanControl.setValue(null);
            }
          }
        })
      )
      .subscribe();
  }

  async __createCart() {
    return await firstValueFrom(
      this.cartService.addCart({
        store: { id: this.storeId! },
        customer: { id: this.customerId! },
        employee: { id: this.employeeId! },
      })
    );
  }

  async createNewCart() {
    const cartId = posCartIdStore.get();

    if (cartId) {
      const foundCart = await firstValueFrom(
        this.cartService.getByKey(cartId).pipe(
          catchError((err) => {
            console.debug(err);
            return of(null);
          })
        )
      );

      if (foundCart && foundCart.checkout != true) {
        this.activeCart = foundCart;
      } else {
        this.activeCart = await this.__createCart();
      }

      posCartIdStore.set(this.activeCart.id + '');
    } else {
      const cart = await this.__createCart();

      this.activeCart = cart;
      posCartIdStore.set(this.activeCart.id + '');
    }
  }

  async addToCartEventHandler(event: ISkuViewRaw) {
    const foundItem = this.orderListItemsSnapshot.find(
      (e) => e.barcode === event.barcode
    );

    if (foundItem) {
      const newQuantity = parseInt(foundItem.quantity + '') + 1;
      const price = parseFloat(foundItem.unitPrice + '');
      const subtotal = price * newQuantity;
      const total = subtotal + (parseFloat(this.taxrate + '') * subtotal) / 100;

      this.orderService.update(
        {
          id: foundItem.id,
          quantity: newQuantity,
          subtotal: subtotal,
          total,
        },
        { isOptimistic: false }
      );
    } else {
      const quantity = 1;
      const unitPrice = parseFloat((event.price ?? 0) + '');
      const subtotal = unitPrice * quantity;
      const taxrate = parseFloat((this.taxrate ?? '0') + '');
      const total = subtotal + (taxrate * subtotal) / 100;

      this.orderService.addOrder({
        cart: { id: this.activeCart.id },
        sku: { id: event.skuId },
        quantity,
        taxrate,
        unitPrice,
        subtotal,
        total,
      });
    }
  }

  editButtonClickEventHandler(event: IOrderViewRaw) {
    this.orderUnderUpdate = event;
  }

  deleteButtonClickEventHandler(event: IOrderViewRaw) {
    this.orderViewService.removeOneFromCache(event);
    this.orderService.delete(event.id);
    this.reloadOrderList();
  }

  reloadProductList() {
    this.skuViewService.clearCache();
    this.skuViewService.getWithQuery(
      {
        take: 10000,
        storeId: this.storeId!,
        cusotmerId: this.customerId!,
        priceLevelId: this.priceLevelId!,
      },
      { isOptimistic: false }
    );
  }

  reloadOrderList() {
    this.orderViewService.clearCache();
    this.orderViewService.getWithQuery(
      {
        take: 1000,
        cartId: this.activeCart.id,
        storeId: this.storeId!,
      },
      { isOptimistic: false }
    );
  }

  updateOrderEventHandler() {
    this.reloadOrderList();
  }

  closeOrderEditorHandler() {
    this.orderUnderUpdate = undefined;
  }

  checkoutButtonClickEventHandler() {
    this.checkoutOpen = true;
  }

  closeCheckout() {
    this.checkoutOpen = false;
  }

  async saleEventHandler(event: ICreateSaleDto) {
    await firstValueFrom(
      this.saleService.add({
        ...event,
        taxrate: this.taxrate!,
        employee: { id: this.employeeId! },
        store: { id: this.storeId! },
        customer: { id: this.customerId! },
        cart: { id: this.activeCart.id },
      } as ICreateSaleDto)
    );

    await firstValueFrom(
      this.cartService.update({ id: this.activeCart.id, checkout: true })
    );

    this.closeCheckout();
    this.orderViewService.clearCache();
    await this.createNewCart();
    this.reloadProductList();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
