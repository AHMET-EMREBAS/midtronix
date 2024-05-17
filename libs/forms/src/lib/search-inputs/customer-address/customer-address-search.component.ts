import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CustomerAddressService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';

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
      [inputControl]="inputControl"
    ></mdtx-input-autocomplete>
  `,
  providers: [CustomerAddressService],
})
export class CustomerAddressSearchComponent {
  @Input() inputControl = new FormControl('', []);

  constructor(protected readonly service: CustomerAddressService) {}
}
