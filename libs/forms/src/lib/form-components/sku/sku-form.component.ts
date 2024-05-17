import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputTextComponent,
  InputTextareaComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { SkuFormBuilder } from '../../form-builders';
import { ProductSearchComponent } from '../../search-inputs';

@Component({
  selector: 'mdtx-sku-form',
  standalone: true,
  imports: [
    CommonFormModule,
    InputTextComponent,
    InputTextareaComponent,
    ProductSearchComponent,
  ],
  templateUrl: './sku-form.component.html',
  styleUrl: './sku-form.component.scss',
})
export class SkuFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...SkuFormBuilder.controls(),
    });
  }
}
