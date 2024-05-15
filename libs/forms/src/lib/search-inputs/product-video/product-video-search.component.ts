import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { ProductVideoService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-product-video-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="product-video"
      label="Search ProductVideo"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [ProductVideoService],
})
export class ProductVideoSearchComponent {
  constructor(protected readonly service: ProductVideoService) {}
}
