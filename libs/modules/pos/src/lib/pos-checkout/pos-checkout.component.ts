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
import { ICreateSaleDto, IOrderViewRaw } from '@mdtx/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { map, merge } from 'rxjs';

@Component({
  selector: 'mdtx-pos-checkout',
  standalone: true,
  imports: [CommonModule, InputNumberComponent, MatButtonModule, MatTabsModule],
  templateUrl: './pos-checkout.component.html',
  styleUrl: './pos-checkout.component.scss',
})
export class PosCheckoutComponent implements AfterViewInit {
  @Input() orderListItems!: IOrderViewRaw[];
  // @ViewChild('accountBalance') accountBalance!: InputNumberComponent;
  cartBalance = 0;
  @ViewChild('cashPayment') cashPayment!: InputNumberComponent;
  @ViewChild('cardPayment') cardPayment!: InputNumberComponent;
  @ViewChild('tax') tax!: InputNumberComponent;
  @ViewChild('subtotal') subtotal!: InputNumberComponent;
  @ViewChild('total') total!: InputNumberComponent;
  @Output() closeCheckoutEvent = new EventEmitter();
  @Output() saleEvent = new EventEmitter();

  closeCheckoutEventHandler() {
    this.closeCheckoutEvent.emit();
  }

  ngAfterViewInit(): void {
    if (this.orderListItems && this.orderListItems.length > 0) {
      const total = this.orderListItems
        .map((e) => parseFloat(e.total + ''))
        .reduce((p, c) => p + c);

      const subtotal = this.orderListItems
        .map((e) => parseFloat(e.subtotal + ''))
        .reduce((p, c) => p + c);

      const tax = this.orderListItems
        .map((e) => {
          return (
            (parseFloat(e.subtotal + '') * parseFloat(e.taxrate + '')) / 100
          );
        })
        .reduce((p, c) => p + c);

      this.cardPayment.inputControl.setValue(total);
      this.cashPayment.inputControl.setValue(0);
      // this.accountBalance.inputControl.setValue(0);

      this.tax.inputControl.setValue(tax);

      this.total.inputControl.setValue(total);
      this.subtotal.inputControl.setValue(subtotal);

      merge(
        this.cardPayment.$valueChange.pipe(map((e) => ({ cardPayment: e }))),
        this.cashPayment.$valueChange.pipe(map((e) => ({ cashPayment: e })))
        // this.accountBalance.$valueChange.pipe(
        //   map((e) => ({ accountBalance: e }))
        // )
      ).subscribe((payment) => {
        const { cardPayment, cashPayment } = payment as any;

        const cardValue = this.card();
        const cashValue = this.cash();
        // const accountValue = this.account();

        if (cardPayment) {
          if (cashValue == 0) {
            const rest = total - cardValue;
            if (rest > 0) {
              this.cashPayment.inputControl.setValue(rest);
            } else {
              this.cashPayment.inputControl.setValue(0);
            }
          }
        } else if (cashPayment) {
          const cashValue = this.cash();
          const restCardValue = total - cashValue;
          if (restCardValue > 0) {
            this.cardPayment.inputControl.setValue(restCardValue);
          } else {
            this.cardPayment.inputControl.setValue(0);
          }
        }

        const cartBalance = total - this.card() - this.cash();

        this.cartBalance = cartBalance;
      });
    }
  }

  payAndSaveSale() {
    this.saleEvent.emit({
      accountBalancePayment: 0,
      cardPayment: this.card(),
      cashPayment: this.cash(),
      subtotal: this.subtotalPrice(),
      total: this.totalPrice(),
    } as ICreateSaleDto);
  }

  addBalanceToCash() {
    this.cashPayment.inputControl.setValue(this.cash() + this.cartBalance);
  }

  addBalanceTocard() {
    this.cardPayment.inputControl.setValue(this.card() + this.cartBalance);
  }

  giveCashBack() {
    const result = this.cash() + this.cartBalance;
    this.cashPayment.inputControl.setValue(result);
  }

  subtotalPrice() {
    return parseFloat(this.subtotal.inputControl.value + '') ?? 0;
  }

  totalPrice() {
    return parseFloat(this.total.inputControl.value + '') ?? 0;
  }
  cash() {
    return parseFloat(this.cashPayment.inputControl.value + '') ?? 0;
  }
  card() {
    return parseFloat(this.cardPayment.inputControl.value + '') ?? 0;
  }
  account() {
    // return parseFloat(this.accountBalance.inputControl.value + '') ?? 0;
  }
}
