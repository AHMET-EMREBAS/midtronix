import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CustomerRoleFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-customer-role-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './customer-role-form.component.html',
  styleUrl: './customer-role-form.component.scss',
})
export class CustomerRoleFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerRoleFormBuilder.controls(),
    });
  }
}
