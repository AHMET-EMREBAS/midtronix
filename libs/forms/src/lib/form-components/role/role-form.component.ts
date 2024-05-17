import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { RoleFormBuilder } from '../../form-builders';
import { PermissionSearchComponent } from '../../search-inputs';

@Component({
  selector: 'mdtx-role-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent, PermissionSearchComponent],
  templateUrl: './role-form.component.html',
  styleUrl: './role-form.component.scss',
})
export class RoleFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...RoleFormBuilder.controls(),
    });
  }
}
