import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { ProductImageService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-product-image-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="product-image"
      label="Search ProductImage"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [ProductImageService],
})
export class ProductImageSearchComponent {
  constructor(protected readonly service: ProductImageService) {}
}
