import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOrderViewRaw } from '@mdtx/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { InputNumberComponent } from '@mdtx/material/form';
import { OrderService, OrderViewService } from '@mdtx/ngrx';
import { PriceLevelSearchComponent } from '@mdtx/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mdtx-order-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    InputNumberComponent,
  ],
  templateUrl: './order-editor.component.html',
  styleUrl: './order-editor.component.scss',
  providers: [OrderService, OrderViewService],
})
export class OrderEditorComponent implements AfterViewInit {
  @ViewChild('salePrice') salePrice!: InputNumberComponent;

  constructor(
    @Inject(MAT_DIALOG_DATA) protected readonly data: IOrderViewRaw,
    protected readonly orderService: OrderService
  ) {}

  ngAfterViewInit(): void {
    this.salePrice.inputControl.setValue(this.data.salePrice);
  }

  updateSalePrice() {
    const __salePrice = parseFloat(this.salePrice.inputControl.value);
    const __taxrate = parseFloat(this.data.taxrate + '');
    const __quantity = parseFloat(this.data.quantity + '');

    console.table({
      __salePrice,
      __taxrate,
      __quantity,
    });

    const tax = __salePrice * (__taxrate / 100);
    const saleSubtotal = __salePrice * __quantity;
    const saleTotal = tax + saleSubtotal;

    console.table({
      tax,
      saleSubtotal,
      saleTotal,
    });

    if (__salePrice) {
      this.orderService.update({
        id: this.data.id,
        salePrice: __salePrice,
        saleSubtotal,
        saleTotal,
      });
    } else {
      console.log('Sale price is not valid!');
    }
  }
}
