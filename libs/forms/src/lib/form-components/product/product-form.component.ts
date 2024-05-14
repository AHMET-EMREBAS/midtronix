import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { ProductFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-product-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...ProductFormBuilder.controls(),
    });
  }
}
