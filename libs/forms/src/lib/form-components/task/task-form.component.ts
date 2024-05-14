import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { TaskFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-task-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...TaskFormBuilder.controls(),
    });
  }
}
