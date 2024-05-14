import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CategoryFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-category-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss',
})
export class CategoryFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CategoryFormBuilder.controls(),
    });
  }
}
