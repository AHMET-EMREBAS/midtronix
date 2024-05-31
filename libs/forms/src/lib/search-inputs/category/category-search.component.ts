/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CategoryService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mdtx-category-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="category"
      label="Search Category"
      prefixIcon="search"
      [inputControl]="inputControl"
      [defaultValue]="inputControl.value ?? undefined"
    ></mdtx-input-autocomplete>
  `,
  providers: [CategoryService],
})
export class CategorySearchComponent {
  @Input() inputControl = new FormControl<any>('', []);

  constructor(protected readonly service: CategoryService) {}
}
