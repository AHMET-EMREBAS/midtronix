import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TicketFormBuilder } from '../../form-builders';
import { TaskFormComponent } from '../task';

@Component({
  selector: 'mdtx-ticket-form',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss',
})
export class TicketFormComponent extends TaskFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...TicketFormBuilder.controls(),
    });
  }
}
