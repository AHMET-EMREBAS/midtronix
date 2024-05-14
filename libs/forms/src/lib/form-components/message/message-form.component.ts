import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { MessageFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-message-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss',
})
export class MessageFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...MessageFormBuilder.controls(),
    });
  }
}
