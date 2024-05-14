import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CommonFormModule,
  InputTextComponent,
  InputUrlComponent,
} from '@mdtx/material/form';
import { BaseFormComponent } from '../../../__base';
import { VideoFormBuilder } from '../../../form-builders';

@Component({
  selector: 'mdtx-video-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent, InputUrlComponent],
  templateUrl: './video-form.component.html',
  styleUrl: './video-form.component.scss',
})
export class VideoFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...VideoFormBuilder.controls(),
    });
  }
}
