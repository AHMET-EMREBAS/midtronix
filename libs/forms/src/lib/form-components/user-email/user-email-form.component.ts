import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { UserEmailFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-user-email-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './user-email-form.component.html',
  styleUrl: './user-email-form.component.scss',
})
export class UserEmailFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...UserEmailFormBuilder.controls(),
    });
  }
}
