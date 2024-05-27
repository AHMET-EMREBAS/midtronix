import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CustomerAccountFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-customer-account-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './customer-account-form.component.html',
  styleUrl: './customer-account-form.component.scss',
})
export class CustomerAccountFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerAccountFormBuilder.controls(),
    });
  }
}
