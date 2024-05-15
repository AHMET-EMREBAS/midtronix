import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CategoryService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-category-search',
  standalone: true,
  imports: [CommonModule, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      [options]="(service.entities$ | async)"
      label="Search Category"
      prefixIcon="category"
    ></mdtx-input-autocomplete>
  `,
  providers: [CategoryService],
})
export class CategorySearchComponent implements OnInit {
  constructor(protected readonly service: CategoryService) {}
  ngOnInit(): void {
    this.service.getAsOptions();
  }
}
