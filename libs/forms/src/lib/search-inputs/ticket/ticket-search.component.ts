import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { TicketService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-ticket-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="ticket"
      label="Search Ticket"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [TicketService],
})
export class TicketSearchComponent {
  constructor(protected readonly service: TicketService) {}
}
