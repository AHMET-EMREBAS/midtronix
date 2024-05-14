import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductImageFormBuilder } from '../../form-builders';
import { ImageFormComponent } from '../__base';

@Component({
  selector: 'mdtx-product-image-form',
  standalone: true,
  imports: [ImageFormComponent],
  templateUrl: './product-image-form.component.html',
  styleUrl: './product-image-form.component.scss',
})
export class ProductImageFormComponent extends ImageFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...ProductImageFormBuilder.controls(),
    });
  }
}
