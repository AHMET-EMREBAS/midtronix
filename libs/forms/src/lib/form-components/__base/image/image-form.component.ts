import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputTextComponent,
  InputUrlComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../../__base';
import { ImageFormBuilder } from '../../../form-builders';

@Component({
  selector: 'mdtx-image-form',
  standalone: true,
  imports: [CommonFormModule, InputUrlComponent, InputTextComponent],
  templateUrl: './image-form.component.html',
  styleUrl: './image-form.component.scss',
})
export class ImageFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...ImageFormBuilder.controls(),
    });
  }
}
