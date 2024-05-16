import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { PriceService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-price-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="price"
      label="Search Price"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [PriceService],
})
export class PriceSearchComponent {
  constructor(protected readonly service: PriceService) {}
}
