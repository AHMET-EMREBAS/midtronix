import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  InputAutocompleteComponent,
  InputChipSelectComponent,
} from '@mdtx/material/form';
import { PermissionService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mdtx-permission-search',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    InputAutocompleteComponent,
    InputChipSelectComponent,
  ],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="permissions"
      label="Search Permissions"
      prefixIcon="search"
      [inputControl]="inputControl"
    ></mdtx-input-autocomplete>
  `,
  providers: [PermissionService],
})
export class PermissionSearchComponent {
  @Input() inputControl!: FormControl;

  constructor(protected readonly service: PermissionService) {}
}
