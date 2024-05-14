import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { ProductImageFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-product-image-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './product-image-form.component.html',
  styleUrl: './product-image-form.component.scss',
})
export class ProductImageFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...ProductImageFormBuilder.controls(),
    });
  }
}
