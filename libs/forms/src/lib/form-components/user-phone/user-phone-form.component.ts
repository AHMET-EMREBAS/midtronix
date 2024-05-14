import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormComponent } from '../../__base';
import { UserPhoneFormBuilder } from '../../form-builders';
import { PhoneFormComponent } from '../__base';

@Component({
  selector: 'mdtx-user-phone-form',
  standalone: true,
  imports: [PhoneFormComponent],
  templateUrl: './user-phone-form.component.html',
  styleUrl: './user-phone-form.component.scss',
})
export class UserPhoneFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...UserPhoneFormBuilder.controls(),
    });
  }
}
