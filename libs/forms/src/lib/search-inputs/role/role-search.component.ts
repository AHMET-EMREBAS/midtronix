import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { RoleService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-role-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="role"
      label="Search Role"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [RoleService],
})
export class RoleSearchComponent {
  constructor(protected readonly service: RoleService) {}
}
