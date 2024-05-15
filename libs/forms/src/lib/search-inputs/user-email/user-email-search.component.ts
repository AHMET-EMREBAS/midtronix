import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { UserEmailService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-user-email-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="user-email"
      label="Search UserEmail"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [UserEmailService],
})
export class UserEmailSearchComponent {
  constructor(protected readonly service: UserEmailService) {}
}
