import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { ProductService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-product-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="product"
      label="Search Product"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [ProductService],
})
export class ProductSearchComponent {
  constructor(protected readonly service: ProductService) {}
}
