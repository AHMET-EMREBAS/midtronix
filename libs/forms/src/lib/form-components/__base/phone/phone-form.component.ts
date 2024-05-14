import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputPhoneComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../../__base';
import { PhoneFormBuilder } from '../../../form-builders';

@Component({
  selector: 'mdtx-phone-form',
  standalone: true,
  imports: [CommonFormModule, InputPhoneComponent],
  templateUrl: './phone-form.component.html',
  styleUrl: './phone-form.component.scss',
})
export class PhoneFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...PhoneFormBuilder.controls(),
    });
  }
}
