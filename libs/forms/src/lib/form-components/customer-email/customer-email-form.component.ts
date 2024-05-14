import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CustomerEmailFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-customer-email-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './customer-email-form.component.html',
  styleUrl: './customer-email-form.component.scss',
})
export class CustomerEmailFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerEmailFormBuilder.controls(),
    });
  }
}
