import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CartFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-cart-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.scss',
})
export class CartFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CartFormBuilder.controls(),
    });
  }
}
