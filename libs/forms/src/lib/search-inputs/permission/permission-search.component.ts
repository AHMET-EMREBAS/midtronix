import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { PermissionService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-permission-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="permission"
      label="Search Permission"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [PermissionService],
})
export class PermissionSearchComponent {
  constructor(protected readonly service: PermissionService) {}
}
