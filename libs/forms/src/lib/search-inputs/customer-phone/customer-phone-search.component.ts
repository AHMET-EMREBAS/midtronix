import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CustomerPhoneService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-customer-phone-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="customer-phone"
      label="Search CustomerPhone"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [CustomerPhoneService],
})
export class CustomerPhoneSearchComponent {
  constructor(protected readonly service: CustomerPhoneService) {}
}
