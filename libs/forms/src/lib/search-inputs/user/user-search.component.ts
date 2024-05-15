import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { UserService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-user-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="user"
      label="Search User"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [UserService],
})
export class UserSearchComponent {
  constructor(protected readonly service: UserService) {}
}
