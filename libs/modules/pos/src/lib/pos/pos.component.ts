import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, firstValueFrom, merge, take, tap } from 'rxjs';
import {
  CustomerSearchComponent,
  PriceLevelSearchComponent,
  StoreSearchComponent,
} from '@mdtx/forms';
import {
  CartService,
  OrderService,
  OrderViewService,
  SkuViewService,
} from '@mdtx/ngrx';
import {
  PosProductCardComponent,
  PosProductCardListComponent,
  PosOrderCardComponent,
  PosOrderCardListComponent,
} from '@mdtx/material/card';
import { IOrderViewRaw, ISkuViewRaw } from '@mdtx/common';
import { LocalStore } from '@mdtx/material/core';
import { MergeStrategy } from '@ngrx/data';
import { InputNumberComponent } from '@mdtx/material/form';

const DEBOUNCE_TIME = 600;

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
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
  providers: [SkuViewService, CartService, OrderService, OrderViewService],
})
export class PosComponent implements AfterViewInit {
  readonly cartStore = LocalStore.createStore('cart', { debounce: 400 });

  @ViewChild('messagesContainer')
  messagesContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('storeSearch') storeSearch!: StoreSearchComponent;
  @ViewChild('priceLevelSearch') priceLevelSearch!: StoreSearchComponent;
  @ViewChild('customerSearch') customerSearch!: StoreSearchComponent;

  productListItemsSnapshot: ISkuViewRaw[] = [];
  productListItems$ = this.skuViewService.entities$.pipe(
    debounceTime(200),
    tap((data) => (this.productListItemsSnapshot = data))
  );

  orderListItemsSnapshot: IOrderViewRaw[] = [];
  orderListItems$ = this.orderViewService.entities$.pipe(
    debounceTime(200),
    tap((data) => (this.orderListItemsSnapshot = data))
  );

  readonly messages: string[] = [];

  scanControl = new FormControl('');

  constructor(
    protected readonly skuViewService: SkuViewService,
    protected readonly orderService: OrderService,
    protected readonly orderViewService: OrderViewService,
    protected readonly cartService: CartService
  ) {}

  ngAfterViewInit(): void {
    merge(
      this.storeSearch.inputControl.valueChanges.pipe(
        debounceTime(DEBOUNCE_TIME)
      ),
      this.priceLevelSearch.inputControl.valueChanges.pipe(
        debounceTime(DEBOUNCE_TIME)
      ),
      this.customerSearch.inputControl.valueChanges.pipe(
        debounceTime(DEBOUNCE_TIME)
      ),
      this.scanControl.valueChanges.pipe(debounceTime(DEBOUNCE_TIME))
    ).subscribe((search) => {
      this.reloadProductList();
      this.reloadOrderList();
    });

    this.reloadOrderList();
    this.reloadProductList();
  }

  log(msg: string) {
    this.messages.unshift(msg);
    this.messagesContainer.nativeElement.scrollBy({
      behavior: 'smooth',
      top: 10000,
    });
  }

  __customerId() {
    return this.customerSearch?.inputControl?.value?.id ?? 1;
  }

  __storeId() {
    return this.storeSearch?.inputControl?.value?.id ?? 1;
  }

  __priceLevelId() {
    return this.priceLevelSearch?.inputControl?.value?.id ?? 1;
  }

  __employeeId() {
    return 1;
  }

  __cartId() {
    return parseInt(this.cartStore.get() ?? '1');
  }

  async createNewCart() {
    const result = await firstValueFrom(
      this.cartService.addCart({
        customer: { id: this.__customerId() },
        employee: { id: this.__employeeId() },
        store: { id: this.__storeId() },
      })
    );

    this.cartStore.set(result.id + '');
  }

  addToCartEventHandler(event: ISkuViewRaw) {
    const foundItem = this.orderListItemsSnapshot.find(
      (e) => e.barcode === event.barcode
    );

    if (foundItem) {
      console.log('Updating Item : ', foundItem);
      this.orderService.update({
        id: foundItem.id,
        quantity: parseInt(foundItem.quantity + '') + 1,
      });
    } else {
      this.orderService.addOrder({
        cart: { id: this.__cartId() },
        sku: { id: event.id },
        quantity: 1,
        unitPrice: parseFloat(event.price + ''),
        subtotal: parseFloat(event.price + ''),
        total: parseFloat(event.price + ''),
      });
    }
    this.reloadOrderList();
  }

  editButtonClickEventHandler(event: IOrderViewRaw) {
    console.log('Edited : ', event);
  }

  deleteButtonClickEventHandler(event: IOrderViewRaw) {
    console.log('Deleting Item : ', event);
    this.orderViewService.removeOneFromCache(event);
    this.orderService.delete(event.id);
    this.reloadOrderList();
  }

  reloadProductList() {
    this.skuViewService.getWithQuery(
      {
        take: 10000,
        storeId: this.__storeId(),
        cusotmerId: this.__customerId(),
        priceLevelId: this.__priceLevelId(),
      },
      { isOptimistic: false }
    );
  }

  reloadOrderList() {
    this.orderViewService.getWithQuery(
      {
        take: 1000,
        cartId: this.__cartId(),
        storeId: this.__storeId(),
      },
      { isOptimistic: false }
    );
  }
}
