import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { ManufacturerService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-manufacturer-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="manufacturer"
      label="Search Manufacturer"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [ManufacturerService],
})
export class ManufacturerSearchComponent {
  constructor(protected readonly service: ManufacturerService) {}
}
