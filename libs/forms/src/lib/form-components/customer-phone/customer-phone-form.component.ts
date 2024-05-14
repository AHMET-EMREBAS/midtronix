import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CustomerPhoneFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-customer-phone-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './customer-phone-form.component.html',
  styleUrl: './customer-phone-form.component.scss',
})
export class CustomerPhoneFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerPhoneFormBuilder.controls(),
    });
  }
}
