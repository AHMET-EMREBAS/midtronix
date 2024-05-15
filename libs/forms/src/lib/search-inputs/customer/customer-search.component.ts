import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CustomerService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-customer-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="customer"
      label="Search Customer"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [CustomerService],
})
export class CustomerSearchComponent {
  constructor(protected readonly service: CustomerService) {}
}
