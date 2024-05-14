import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule, InputTextComponent } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { TicketFormBuilder } from '../../form-builders';

@Component({
  selector: 'mdtx-ticket-form',
  standalone: true,
  imports: [CommonFormModule, InputTextComponent],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss',
})
export class TicketFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...TicketFormBuilder.controls(),
    });
  }
}
