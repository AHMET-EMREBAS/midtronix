import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { NotificationFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-notification-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './notification-form.component.html',
  styleUrl: './notification-form.component.scss',
})
export class NotificationFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...NotificationFormBuilder.controls(),
    });
  }
}
