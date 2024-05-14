import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormComponent } from '../../__base';
import { UserAddressFormBuilder } from '../../form-builders';
import { AddressFormComponent } from '../__base';

@Component({
  selector: 'mdtx-user-address-form',
  standalone: true,
  imports: [AddressFormComponent],
  templateUrl: './user-address-form.component.html',
  styleUrl: './user-address-form.component.scss',
})
export class UserAddressFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...UserAddressFormBuilder.controls(),
    });
  }
}
