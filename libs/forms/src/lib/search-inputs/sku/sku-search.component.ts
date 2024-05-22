import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { SkuService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { ISkuRaw } from '@mdtx/common';

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
      [inputControl]="inputControl"
      [multiple]="multiple"
    ></mdtx-input-autocomplete>
  `,
  providers: [SkuService],
})
export class SkuSearchComponent {
  @Input() multiple = false;
  @Input() inputControl = new FormControl<ISkuRaw | null>(null, []);

  constructor(protected readonly service: SkuService) {}
}
