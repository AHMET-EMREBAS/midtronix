import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormComponent } from '../../__base';
import { CustomerAddressFormBuilder } from '../../form-builders';
import { AddressFormComponent } from '../__base';

@Component({
  selector: 'mdtx-customer-address-form',
  standalone: true,
  imports: [AddressFormComponent],
  templateUrl: './customer-address-form.component.html',
  styleUrl: './customer-address-form.component.scss',
})
export class CustomerAddressFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerAddressFormBuilder.controls(undefined),
    });
  }
}
