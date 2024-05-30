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
import { IOrderViewRaw, IPriceLevel, IStore, QueryBuilder } from '@mdtx/common';
import { MatButtonModule } from '@angular/material/button';
import {
  DiscountViewService,
  OrderService,
  OrderViewService,
  SkuViewService,
} from '@mdtx/ngrx';
import { firstValueFrom } from 'rxjs';
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
  @Input() storeId!: number;
  @Input() priceLevelId!: number;
  @Input() taxrate!: number;

  @ViewChild('priceLevelSearch') priceLevelSearch!: PriceLevelSearchComponent;
  @ViewChild('discountSearch') discountSearch!: DiscountViewSearchComponent;

  quantityControl = new FormControl(0, [Validators.min(1)]);
  unitPriceControl = new FormControl(0, [Validators.min(0)]);
  subtotalControl = new FormControl(0, [Validators.min(0)]);
  totalControl = new FormControl(0, [Validators.min(0)]);

  @Output() updateEvent = new EventEmitter();
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

  closeEventHandler() {
    this.closeEvent.emit();
  }

  // async updateOrder() {
  //   const quantity = parseInt(this.quantityControl.value + '') ?? 1;
  //   const unitPrice = parseFloat(this.unitPriceControl.value + '');

  //   await firstValueFrom(
  //     this.orderService.update({
  //       id: this.activeOrder.id,
  //       quantity,
  //       unitPrice,
  //     })
  //   );

  //   this.updateEvent.emit();
  // }

  // updateTotal() {
  //   const __subtotal = this.subtotalControl.value;
  //   const __quantity = this.quantityControl.value;

  //   if (__subtotal && __quantity) {
  //     const subtotal = parseFloat(__subtotal + '');
  //     const quantity = parseFloat(__quantity + '');
  //     const price = parseFloat((subtotal / quantity).toFixed(2));

  //     this.unitPriceControl.setValue(price);
  //     this.updateOrder();
  //   }
  // }
  updateQuantity() {
    const quantity = this.quantityControl.value;

    if (quantity) {
      this.orderService.update({ id: this.activeOrder.id, quantity });
      this.updateEvent.emit();
    }
  }

  updateUnitPrice() {
    const unitPrice = this.unitPriceControl.value;
    if (unitPrice) {
      this.orderService.update({ id: this.activeOrder.id, unitPrice });
      this.updateEvent.emit();
    }
  }

  // async updatePriceLevel() {
  //   const priceLevel = this.priceLevelSearch.inputControl.value;

  //   if (priceLevel) {
  //     const foundPriceLevels = await firstValueFrom(
  //       this.skuViewService.query({
  //         barcode: QueryBuilder.EQUAL(this.activeOrder.barcode),
  //         priceLevelId: priceLevel.id,
  //         storeId: this.storeId,
  //       })
  //     );
  //     const found = foundPriceLevels[0];
  //     if (found) {
  //       this.unitPriceControl.setValue(found.price);
  //       this.updateOrder();
  //     }
  //   }
  // }
}
