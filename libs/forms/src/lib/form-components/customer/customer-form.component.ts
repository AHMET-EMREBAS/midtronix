import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputPasswordComponent,
  InputTextComponent,
  InputUsernameComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CustomerFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-customer-form',
  standalone: true,
  imports: [
    CommonFormModule,
    InputTextComponent,
    InputUsernameComponent,
    InputPasswordComponent,
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss',
})
export class CustomerFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerFormBuilder.controls(undefined, ['supervisor', 'roles']),
    });
  }
}
