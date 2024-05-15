import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { MessageService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-message-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="message"
      label="Search Message"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [MessageService],
})
export class MessageSearchComponent {
  constructor(protected readonly service: MessageService) {}
}
