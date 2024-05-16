import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketFormComponent } from '@mdtx/forms';
import { ITicket } from '@mdtx/common';
import { TicketService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-ticket',
  standalone: true,
  imports: [CommonModule, TicketFormComponent],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.scss',
  providers: [TicketService],
})
export class CreateTicketComponent {
  constructor(protected readonly service: TicketService) {}
  handleSubmit(ticket: ITicket) {
    this.service.add(ticket);
  }
}
