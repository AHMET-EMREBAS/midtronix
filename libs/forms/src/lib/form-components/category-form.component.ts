import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  FormComponent,
  InputTextComponent,
} from '@mdtx/material/form';
import { FormType } from '../__base';
import { ICreateCategoryDto } from '@mdtx/common';
import { CategoryFormBuilder } from '../form-builders';

@Component({
  selector: 'mdtx-category-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  template: `
    <form class="form-container" [formGroup]="resourceFormGroup" novalidate>
      <!-- Form Inputs  -->
      <mdtx-input-text [inputControl]="control('name')" ]></mdtx-input-text>

      <!-- Form actions -->
      <div class="form-actions">
        <button mat-raised-button color="primary" (click)="formSubmit()" )>
          Save Category
        </button>
        <button mat-stroked-button color="primary" (click)="formReset()">
          Reset
        </button>
      </div>
    </form>
  `,
})
export class CategoryFormComponent extends FormComponent {
  override resourceFormGroup: FormGroup<FormType<ICreateCategoryDto>> =
    new FormGroup({
      ...CategoryFormBuilder.controls(),
    });
}
