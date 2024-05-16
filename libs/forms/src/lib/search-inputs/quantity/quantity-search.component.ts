import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { QuantityService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-quantity-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="quantity"
      label="Search Quantity"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [QuantityService],
})
export class QuantitySearchComponent {
  constructor(protected readonly service: QuantityService) {}
}
