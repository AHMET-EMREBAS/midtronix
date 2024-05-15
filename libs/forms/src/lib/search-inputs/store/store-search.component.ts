import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { StoreService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-store-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="store"
      label="Search Store"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [StoreService],
})
export class StoreSearchComponent {
  constructor(protected readonly service: StoreService) {}
}
