import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { DepartmentFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-department-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './department-form.component.html',
  styleUrl: './department-form.component.scss',
})
export class DepartmentFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...DepartmentFormBuilder.controls(),
    });
  }
}
