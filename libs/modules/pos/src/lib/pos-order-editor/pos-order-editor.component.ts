import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
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
import { IOrderViewRaw } from '@mdtx/common';
import { MatButtonModule } from '@angular/material/button';
import { DiscountViewService, SkuViewService } from '@mdtx/ngrx';
import { switchMap } from 'rxjs';

@Component({
  selector: 'mdtx-pos-order-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    InputNumberComponent,
    PriceLevelSearchComponent,
    DiscountViewSearchComponent,
  ],
  templateUrl: './pos-order-editor.component.html',
  styleUrl: './pos-order-editor.component.scss',
  providers: [SkuViewService, DiscountViewService],
})
export class PosOrderEditorComponent implements OnInit, AfterViewInit {
  @Input() order!: IOrderViewRaw;
  @ViewChild('priceLevelSearch') priceLevelSearch!: PriceLevelSearchComponent;
  @ViewChild('discountSearch') discountSearch!: DiscountViewSearchComponent;

  quantityControl = new FormControl(0, [Validators.min(1)]);

  @Output() updateEvent = new EventEmitter<IOrderViewRaw>();

  constructor(
    protected readonly skuViewService: SkuViewService,
    protected readonly discountViewService: DiscountViewService
  ) {}
  ngOnInit(): void {
    if (!this.order) {
      this.order = { id: 1 } as IOrderViewRaw;
    }
    this.quantityControl.setValue(this.order.quantity ?? 1);
  }

  ngAfterViewInit(): void {
    this.priceLevelSearch.inputControl.valueChanges
      .pipe(
        switchMap((priceLevel) => {
          return this.skuViewService.queryBy(
            'priceLevelId',
            priceLevel?.id + ''
          );
        })
      )
      .subscribe((skus) => {
        console.log(skus);
      });

    this.discountSearch.inputControl.valueChanges
      .pipe(
        switchMap((d) => {
          return this.discountViewService.queryBy(
            'skuId',
            this.order.skuId + ''
          );
        })
      )
      .subscribe((discount) => {
        console.log(discount);
      });
  }
}
