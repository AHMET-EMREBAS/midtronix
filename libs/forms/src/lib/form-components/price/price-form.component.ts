import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputTextComponent,
  InputNumberComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { PriceFormBuilder } from '../../form-builders';
import {
  PriceLevelSearchComponent,
  SkuSearchComponent,
} from '../../search-inputs';
import { IPriceLevel } from '@mdtx/common';

@Component({
  selector: 'mdtx-price-form',
  standalone: true,
  imports: [
    CommonFormModule,
    InputTextComponent,
    InputNumberComponent,
    SkuSearchComponent,
    PriceLevelSearchComponent,
  ],
  templateUrl: './price-form.component.html',
  styleUrl: './price-form.component.scss',
})
export class PriceFormComponent extends BaseFormComponent {
  @Output() priceLevelChangeEvent = new EventEmitter<IPriceLevel>();

  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...PriceFormBuilder.controls(),
    });
  }
}
