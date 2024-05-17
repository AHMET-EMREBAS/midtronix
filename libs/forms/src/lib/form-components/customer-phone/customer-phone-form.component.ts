import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerPhoneFormBuilder } from '../../form-builders';
import { PhoneFormComponent } from '../__base/phone';
import { CustomerSearchComponent } from '../../search-inputs';

@Component({
  selector: 'mdtx-customer-phone-form',
  standalone: true,
  imports: [PhoneFormComponent , CustomerSearchComponent],
  templateUrl: './customer-phone-form.component.html',
  styleUrl: './customer-phone-form.component.scss',
})
export class CustomerPhoneFormComponent extends PhoneFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerPhoneFormBuilder.controls(),
    });
  }
}
