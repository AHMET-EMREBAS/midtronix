import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CustomerAddressService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-customer-address-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="customer-address"
      label="Search CustomerAddress"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [CustomerAddressService],
})
export class CustomerAddressSearchComponent {
  constructor(protected readonly service: CustomerAddressService) {}
}
