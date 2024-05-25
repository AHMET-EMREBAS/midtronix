import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputNumberComponent,
  InputTextComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { PriceLevelFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-price-level-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent, InputNumberComponent],
  templateUrl: './price-level-form.component.html',
  styleUrl: './price-level-form.component.scss',
})
export class PriceLevelFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...PriceLevelFormBuilder.controls(),
    });
  }
}
