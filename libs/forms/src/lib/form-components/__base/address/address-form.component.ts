import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../../__base';
import { AddressFormBuilder } from '../../../form-builders';

@Component({
  selector: 'mdtx-address-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent extends BaseFormComponent {
  
  @Input() submitLabel = 'Save Address';

  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...AddressFormBuilder.controls(),
    });
  }
}
