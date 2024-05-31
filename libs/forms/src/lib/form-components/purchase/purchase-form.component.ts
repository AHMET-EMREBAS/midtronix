import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputDateComponent,
  InputNumberComponent,
  InputTextComponent,
  InputTextareaComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { PurchaseFormBuilder } from '../../form-builders';
import {
  ManufacturerSearchComponent,
  SkuSearchComponent,
  UserSearchComponent,
} from '../../search-inputs';

@Component({
  selector: 'mdtx-purchase-form',
  standalone: true,
  imports: [
    CommonFormModule,
    InputTextComponent,
    InputNumberComponent,
    ManufacturerSearchComponent,
    UserSearchComponent,
    SkuSearchComponent,
    InputTextareaComponent,
    InputDateComponent,
  ],
  templateUrl: './purchase-form.component.html',
  styleUrl: './purchase-form.component.scss',
})
export class PurchaseFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...PurchaseFormBuilder.controls(),
    });
  }
}
