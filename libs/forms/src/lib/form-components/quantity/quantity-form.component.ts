import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputNumberComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { QuantityFormBuilder } from '../../form-builders';
import { SkuSearchComponent, StoreSearchComponent } from '../../search-inputs';
import { IStore } from '@mdtx/common';

@Component({
  selector: 'mdtx-quantity-form',
  standalone: true,
  imports: [
    CommonFormModule,
    InputNumberComponent,
    SkuSearchComponent,
    StoreSearchComponent,
  ],
  templateUrl: './quantity-form.component.html',
  styleUrl: './quantity-form.component.scss',
})
export class QuantityFormComponent extends BaseFormComponent {
  @Output() storeChangeEvent = new EventEmitter<IStore>();

  @Input() showStoreInput = true;
  @Input() showSkuInput = true;

  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...QuantityFormBuilder.controls(),
    });
  }
}
