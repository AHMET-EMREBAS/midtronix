import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CustomerEmailService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-customer-email-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="customer-email"
      label="Search CustomerEmail"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [CustomerEmailService],
})
export class CustomerEmailSearchComponent {
  constructor(protected readonly service: CustomerEmailService) {}
}
