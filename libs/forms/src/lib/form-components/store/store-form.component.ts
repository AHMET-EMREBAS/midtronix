import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { StoreFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-store-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './store-form.component.html',
  styleUrl: './store-form.component.scss',
})
export class StoreFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...StoreFormBuilder.controls(),
    });
  }
}
