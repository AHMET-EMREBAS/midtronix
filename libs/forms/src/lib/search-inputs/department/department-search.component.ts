import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { DepartmentService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-department-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="department"
      label="Search Department"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [DepartmentService],
})
export class DepartmentSearchComponent {
  constructor(protected readonly service: DepartmentService) {}
}
