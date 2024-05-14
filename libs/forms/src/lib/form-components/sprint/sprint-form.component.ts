import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputTextComponent,
  InputTextareaComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { SprintFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-sprint-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent, InputTextareaComponent],
  templateUrl: './sprint-form.component.html',
  styleUrl: './sprint-form.component.scss',
})
export class SprintFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...SprintFormBuilder.controls(),
    });
  }
}
