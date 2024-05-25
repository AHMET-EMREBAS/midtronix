/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from '@mdtx/material/form';
import { FormControl, Validators } from '@angular/forms';
import {
  DiscountViewSearchComponent,
  PriceLevelSearchComponent,
} from '@mdtx/forms';
import {
  IOrder,
  IOrderRaw,
  IOrderViewRaw,
  IPriceLevel,
  IStore,
  QueryBuilder,
} from '@mdtx/common';
import { MatButtonModule } from '@angular/material/button';
import {
  DiscountViewService,
  OrderService,
  OrderViewService,
  SkuViewService,
} from '@mdtx/ngrx';
import { firstValueFrom, switchMap } from 'rxjs';
import { calcualteTax } from '../__common';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'mdtx-pos-order-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    InputNumberComponent,
    PriceLevelSearchComponent,
    DiscountViewSearchComponent,
    MatTabsModule,
  ],
  templateUrl: './pos-order-editor.component.html',
  styleUrl: './pos-order-editor.component.scss',
  providers: [
    OrderService,
    SkuViewService,
    DiscountViewService,
    OrderViewService,
  ],
})
export class PosOrderEditorComponent implements AfterViewInit {
  @Input() activeOrder!: IOrderViewRaw;
  @Input() activeStore!: IStore;
  @Input() activePriceLevel!: IPriceLevel;

  @ViewChild('priceLevelSearch') priceLevelSearch!: PriceLevelSearchComponent;
  @ViewChild('discountSearch') discountSearch!: DiscountViewSearchComponent;

  quantityControl = new FormControl(0, [Validators.min(1)]);
  unitPriceControl = new FormControl(0, [Validators.min(0)]);
  subtotalControl = new FormControl(0, [Validators.min(0)]);
  totalControl = new FormControl(0, [Validators.min(0)]);

  @Output() updateEvent = new EventEmitter<Partial<IOrderRaw>>();
  @Output() closeEvent = new EventEmitter();

  constructor(
    protected readonly skuViewService: SkuViewService,
    protected readonly discountViewService: DiscountViewService,
    protected readonly orderService: OrderService,
    protected readonly orderViewService: OrderViewService
  ) {}

  async updateOrderForm() {
    const data = await firstValueFrom(
      this.orderViewService.getByKey(this.activeOrder.id)
    );
    this.activeOrder = data;
    this.quantityControl.setValue(this.activeOrder.quantity ?? 1);
    this.unitPriceControl.setValue(this.activeOrder.unitPrice);
    this.subtotalControl.setValue(this.activeOrder.subtotal);
    this.totalControl.setValue(this.activeOrder.total);
  }

  async ngAfterViewInit() {
    this.updateOrderForm();
  }

  calculatePrices(
    price: number,
    quantity: number,
    fixedDiscount = 0,
    percentDiscount = 0
  ): Pick<IOrderViewRaw, 'unitPrice' | 'subtotal' | 'total'> {
    const discount = fixedDiscount + (percentDiscount * price) / 100;
    const unitPrice = price - discount;
    const tax = calcualteTax(unitPrice);
    const subtotal = quantity * unitPrice;
    const total = quantity * (tax + parseFloat(unitPrice + ''));

    return {
      unitPrice,
      subtotal,
      total,
    };
  }

  updateOrderEventHandler() {
    const { subtotal, total, unitPrice } = this.calculatePrices(
      parseFloat(this.unitPriceControl.value + ''),
      parseFloat(this.quantityControl.value + ''),
      this.discountSearch.inputControl.value?.fixed,
      this.discountSearch.inputControl.value?.percent
    );
    const updatedOrder: Partial<IOrderRaw> = {
      id: this.activeOrder.id,
      quantity: this.quantityControl.value ?? 1,
      unitPrice: unitPrice,
      subtotal: parseFloat(this.subtotalControl.value + ''),
      total: total,
    };
    this.updateEvent.emit(updatedOrder);
  }

  closeEventHandler() {
    this.closeEvent.emit();
  }

  updateQuantity() {
    const newQuantity = parseInt(this.quantityControl.value + '') ?? 1;
    const unitPrice = parseFloat(this.unitPriceControl.value + '') ?? 0;
    const subtotal = newQuantity * unitPrice;

    this.orderService.update({
      id: this.activeOrder.id,
      quantity: newQuantity,
      subtotal: subtotal,
      total: 0,
    });
  }

  updateUnitPrice() {
    this.orderService.update({
      id: this.activeOrder.id,
      unitPrice: parseFloat(this.unitPriceControl.value + '') ?? 0,
    });
  }

  async updatePriceLevel() {
    const priceLevel = this.priceLevelSearch.inputControl.value;

    if (priceLevel) {
      const foundPriceLevels = await firstValueFrom(
        this.skuViewService.query({
          barcode: QueryBuilder.EQUAL(this.activeOrder.barcode),
          priceLevelId: priceLevel.id,
          storeId: this.activeStore.id,
        })
      );
      const found = foundPriceLevels[0];
      if (found) {
        this.unitPriceControl.setValue(found.price);
        this.updateUnitPrice();
      }
    }
  }

  udpateDiscount() {}
}
