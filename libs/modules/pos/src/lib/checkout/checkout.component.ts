import {
  AfterViewInit,
  Component,
  DebugNode,
  Inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from '@mdtx/material/form';
import { SaleFormComponent } from '@mdtx/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { ICreateSaleDto, IOrderViewRaw } from '@mdtx/common';
import { debounceTime } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { CartService, OrderViewService, SaleService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-checkout',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    InputNumberComponent,
    SaleFormComponent,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  providers: [CartService, OrderViewService, SaleService],
})
export class CheckoutComponent implements AfterViewInit {
  @ViewChild('saleForm') saleForm!: SaleFormComponent;

  ready = false;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    protected readonly data: {
      orders: IOrderViewRaw[];
      cartId: number;
    },
    protected readonly matDialog: MatDialog,
    protected cartService: CartService,
    protected orderViewService: OrderViewService,
    protected saleService: SaleService
  ) {}

  ngAfterViewInit(): void {
    this.saleForm
      .control('orders')
      .setValue(this.data.orders.map((e) => ({ id: e.id })));
    this.saleForm.control('cart').setValue(this.data.cartId);
    this.saleForm.control('taxrate').setValue(6.25);

    const cardPayment = this.saleForm.control('cardPayment');
    const cashPayment = this.saleForm.control('cashPayment');

    cardPayment.setValue(this.getTotal());
    cashPayment.setValue(0);

    cardPayment.valueChanges.pipe(debounceTime(600)).subscribe((data) => {
      const value = parseFloat(data ?? '0');
      const rest = this.getTotal() - value;
      cashPayment.setValue(rest);
    });

    cashPayment.valueChanges.pipe(debounceTime(600)).subscribe((data) => {
      const value = parseFloat(data ?? '0');
      const rest = this.getTotal() - value;
      cardPayment.setValue(rest);
    });

    this.ready = true;
  }

  getSubtotal() {
    return this.data.orders
      .map((e) => e.saleSubtotal)
      .reduce((p, c) => {
        return parseFloat(p + '') + parseFloat(c + '');
      });
  }

  getTax() {
    return (
      (this.getSubtotal() *
        (parseFloat(this.saleForm.control('taxrate').value) ?? 6.25)) /
      100
    );
  }

  getTotal() {
    return parseFloat(this.getSubtotal() + '') + parseFloat(this.getTax() + '');
  }

  submitEventHandler(event: ICreateSaleDto) {
    console.log('Submit EVent: ', event);

    this.orderViewService.clearCache();
    this.cartService.update({ id: this.data.cartId, closed: true });

    this.matDialog.closeAll();

    this.saleService.addSale({
      ...event,
      cart: { id: this.data.cartId },
    });
  }
}
