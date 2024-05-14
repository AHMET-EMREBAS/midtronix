import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { ProductVideoFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-product-video-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './product-video-form.component.html',
  styleUrl: './product-video-form.component.scss',
})
export class ProductVideoFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...ProductVideoFormBuilder.controls(),
    });
  }
}
