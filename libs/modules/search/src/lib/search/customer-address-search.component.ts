import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ICustomerAddress } from '@mdtx/common';
import { CustomerAddressService } from '@mdtx/modules/ngrx';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { BaseSearchComponent } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-customer-address-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, InputAutocompleteComponent],
  template: `
    <ng-container *ngIf="searchItems$ | async"></ng-container>
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="customerAddress"
      label="Search CustomerAddress"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [CustomerAddressService],
})
export class CustomerAddressSearchComponent extends BaseSearchComponent<ICustomerAddress> {}
