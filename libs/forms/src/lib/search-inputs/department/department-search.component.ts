import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { DepartmentService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { IDepartment } from '@mdtx/common';
import { IInputOption } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-department-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="department"
      label="Search Department"
      prefixIcon="search"
      [inputControl]="inputControl"
      [defaultValue]="inputControl.value ?? undefined"
    ></mdtx-input-autocomplete>
  `,
  providers: [DepartmentService],
})
export class DepartmentSearchComponent<T extends IInputOption = IDepartment> {
  @Input() inputControl = new FormControl<T | null>(null, []);

  constructor(protected readonly service: DepartmentService) {}
}
