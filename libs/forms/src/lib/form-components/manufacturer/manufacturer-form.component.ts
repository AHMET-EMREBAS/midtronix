import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { ManufacturerFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-manufacturer-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './manufacturer-form.component.html',
  styleUrl: './manufacturer-form.component.scss',
})
export class ManufacturerFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...ManufacturerFormBuilder.controls(),
    });
  }
}
