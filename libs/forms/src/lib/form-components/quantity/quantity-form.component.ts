import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { QuantityFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-quantity-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './quantity-form.component.html',
  styleUrl: './quantity-form.component.scss',
})
export class QuantityFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...QuantityFormBuilder.controls(),
    });
  }
}
