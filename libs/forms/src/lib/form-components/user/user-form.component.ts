import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormComponent } from '../../__base';
import { UserFormBuilder } from '../../form-builders';
import {
  InputPasswordComponent,
  InputTextComponent,
  InputUsernameComponent,
} from '@mdtx/material/form';

@Component({
  selector: 'mdtx-user-form',
  standalone: true,
  imports: [InputTextComponent, InputUsernameComponent, InputPasswordComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...UserFormBuilder.controls(),
    });
  }
}
