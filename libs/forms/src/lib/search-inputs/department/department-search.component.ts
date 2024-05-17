import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
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
      [inputControl]="inputControl"
    ></mdtx-input-autocomplete>
  `,
  providers: [DepartmentService],
})
export class DepartmentSearchComponent {
  @Input() inputControl = new FormControl('', []);
  constructor(protected readonly service: DepartmentService) {}
}
