import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CustomerPermissionFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-customer-permission-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './customer-permission-form.component.html',
  styleUrl: './customer-permission-form.component.scss',
})
export class CustomerPermissionFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerPermissionFormBuilder.controls(),
    });
  }
}
