import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormComponent } from '../../__base';
import { UserFormBuilder } from '../../form-builders';
import {
  CommonFormModule,
  InputPasswordComponent,
  InputTextComponent,
  InputUsernameComponent,
} from '@mdtx/material/form';
import { RoleSearchComponent, UserSearchComponent } from '../../search-inputs';

@Component({
  selector: 'mdtx-user-form',
  standalone: true,
  imports: [
    CommonFormModule,
    InputTextComponent,
    InputUsernameComponent,
    InputPasswordComponent,
    RoleSearchComponent,
    UserSearchComponent,
  ],
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
