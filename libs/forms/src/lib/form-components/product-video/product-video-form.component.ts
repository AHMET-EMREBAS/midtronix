import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductVideoFormBuilder } from '../../form-builders';
import { VideoFormComponent } from '../__base';

@Component({
  selector: 'mdtx-product-video-form',
  standalone: true,
  imports: [VideoFormComponent],
  templateUrl: './product-video-form.component.html',
  styleUrl: './product-video-form.component.scss',
})
export class ProductVideoFormComponent extends VideoFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...ProductVideoFormBuilder.controls(),
    });
  }
}
