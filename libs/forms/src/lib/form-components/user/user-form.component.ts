import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { UserFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-user-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
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
