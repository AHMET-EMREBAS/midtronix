import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputTextComponent,
  InputTextareaComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { ProductFormBuilder } from '../../form-builders';
import {
  CategorySearchComponent,
  DepartmentSearchComponent,
} from '../../search-inputs';

@Component({
  selector: 'mdtx-product-form',
  standalone: true,
  imports: [
    CommonFormModule,
    InputTextComponent,
    InputTextareaComponent,
    CategorySearchComponent,
    DepartmentSearchComponent,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...ProductFormBuilder.controls(),
    });
  }
}
