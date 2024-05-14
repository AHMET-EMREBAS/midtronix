import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormComponent } from '../../__base';
import { UserEmailFormBuilder } from '../../form-builders';
import { EmailFormComponent } from '../__base';

@Component({
  selector: 'mdtx-user-email-form',
  standalone: true,
  imports: [EmailFormComponent],
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
