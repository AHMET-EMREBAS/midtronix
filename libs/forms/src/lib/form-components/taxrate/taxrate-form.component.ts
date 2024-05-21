import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputNumberComponent,
  InputTextComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { TaxrateFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-taxrate-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent, InputNumberComponent],
  templateUrl: './taxrate-form.component.html',
  styleUrl: './taxrate-form.component.scss',
})
export class TaxrateFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...TaxrateFormBuilder.controls(),
    });
  }
}
