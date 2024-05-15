import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CategoryService } from '@mdtx/ngrx';

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
    ></mdtx-input-autocomplete>
  `,
  providers: [CategoryService],
})
export class CategorySearchComponent {
  constructor(protected readonly service: CategoryService) {}
}
