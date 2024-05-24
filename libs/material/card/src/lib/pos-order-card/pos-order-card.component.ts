import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseProductCardComponent } from '../__common/base-product-card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InputQuantityComponent } from '@mdtx/material/form';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'mdtx-pos-order-card',
  standalone: true,
  imports: [
    CommonModule,
    InputQuantityComponent,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './pos-order-card.component.html',
  styleUrl: './pos-order-card.component.scss',
})
export class PosOrderCardComponent
  extends BaseProductCardComponent
  implements AfterViewInit
{
  @Output() editButtonClickEvent = new EventEmitter();

  priceControl = new FormControl(0);
  quantityControl = new FormControl(0);

  ngAfterViewInit(): void {
    this.priceControl.setValue(this.productUnitPrice);
    this.quantityControl.setValue(this.productQuantity);
  }

  editButtonClickEventHandler() {
    this.editButtonClickEvent.emit();
  }
}
