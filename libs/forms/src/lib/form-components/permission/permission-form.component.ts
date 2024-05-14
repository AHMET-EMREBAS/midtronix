import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { PermissionFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-permission-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './permission-form.component.html',
  styleUrl: './permission-form.component.scss',
})
export class PermissionFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...PermissionFormBuilder.controls(),
    });
  }
}
