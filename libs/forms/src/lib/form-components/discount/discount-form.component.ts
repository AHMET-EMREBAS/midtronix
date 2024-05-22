import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { DiscountFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-discount-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './discount-form.component.html',
  styleUrl: './discount-form.component.scss',
})
export class DiscountFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...DiscountFormBuilder.controls(),
    });
  }
}
