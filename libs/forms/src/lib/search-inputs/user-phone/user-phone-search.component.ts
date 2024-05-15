import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { UserPhoneService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-user-phone-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="user-phone"
      label="Search UserPhone"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [UserPhoneService],
})
export class UserPhoneSearchComponent {
  constructor(protected readonly service: UserPhoneService) {}
}
