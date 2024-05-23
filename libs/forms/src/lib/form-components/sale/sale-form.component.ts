import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { SaleFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-sale-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './sale-form.component.html',
  styleUrl: './sale-form.component.scss',
})
export class SaleFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...SaleFormBuilder.controls(),
    });
  }
}
