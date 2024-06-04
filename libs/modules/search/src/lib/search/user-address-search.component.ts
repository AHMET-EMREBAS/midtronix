import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IUserAddress } from '@mdtx/common';
import { UserAddressService } from '@mdtx/modules/ngrx';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { BaseSearchComponent } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-user-address-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, InputAutocompleteComponent],
  template: `
    <ng-container *ngIf="searchItems$ | async"></ng-container>
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="userAddress"
      label="Search UserAddress"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [UserAddressService],
})
export class UserAddressSearchComponent extends BaseSearchComponent<IUserAddress> {}
