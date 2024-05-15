import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { UserAddressService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-user-address-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="user-address"
      label="Search UserAddress"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [UserAddressService],
})
export class UserAddressSearchComponent {
  constructor(protected readonly service: UserAddressService) {}
}
