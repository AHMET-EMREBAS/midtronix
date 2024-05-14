import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CustomerAddressFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-customer-address-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './customer-address-form.component.html',
  styleUrl: './customer-address-form.component.scss',
})
export class CustomerAddressFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerAddressFormBuilder.controls(),
    });
  }
}
