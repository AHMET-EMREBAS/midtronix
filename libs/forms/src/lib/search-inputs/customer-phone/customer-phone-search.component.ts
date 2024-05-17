import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CustomerPhoneService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';

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
      [inputControl]="inputControl"
    ></mdtx-input-autocomplete>
  `,
  providers: [CustomerPhoneService],
})
export class CustomerPhoneSearchComponent {
  @Input() inputControl = new FormControl('', []);

  constructor(protected readonly service: CustomerPhoneService) {}
}
