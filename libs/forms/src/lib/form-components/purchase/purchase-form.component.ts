import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { PurchaseFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-purchase-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './purchase-form.component.html',
  styleUrl: './purchase-form.component.scss',
})
export class PurchaseFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...PurchaseFormBuilder.controls(),
    });
  }
}
