import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputTextComponent,
  InputTextareaComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { ProjectFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-project-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent, InputTextareaComponent],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss',
})
export class ProjectFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...ProjectFormBuilder.controls(),
    });
  }
}
