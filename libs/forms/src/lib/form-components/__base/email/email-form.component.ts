import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputUsernameComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../../__base';
import { EmailFormBuilder } from '../../../form-builders';

@Component({
  selector: 'mdtx-email-form',
  standalone: true,
  imports: [CommonFormModule, InputUsernameComponent],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss',
})
export class EmailFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...EmailFormBuilder.controls(),
    });
  }
}
