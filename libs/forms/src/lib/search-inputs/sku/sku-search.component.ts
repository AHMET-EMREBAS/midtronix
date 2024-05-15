import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { SkuService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-sku-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="sku"
      label="Search Sku"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [SkuService],
})
export class SkuSearchComponent {
  constructor(protected readonly service: SkuService) {}
}
