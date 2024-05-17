import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerEmailFormBuilder } from '../../form-builders';
import { EmailFormComponent } from '../__base';
import { CustomerSearchComponent } from '../../search-inputs';

@Component({
  selector: 'mdtx-customer-email-form',
  standalone: true,
  imports: [EmailFormComponent, CustomerSearchComponent],
  templateUrl: './customer-email-form.component.html',
  styleUrl: './customer-email-form.component.scss',
})
export class CustomerEmailFormComponent extends EmailFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CustomerEmailFormBuilder.controls(),
    });
  }
}
