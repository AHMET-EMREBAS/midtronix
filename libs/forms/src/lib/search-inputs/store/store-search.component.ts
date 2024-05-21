import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { StoreService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { IID, IStoreRaw } from '@mdtx/common';

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
      [inputControl]="inputControl"
    ></mdtx-input-autocomplete>
  `,
  providers: [StoreService],
})
export class StoreSearchComponent implements OnInit {
  @Input() inputControl = new FormControl<IStoreRaw | null>(null, []);
  @Input() defaultStore?: IStoreRaw;
  constructor(protected readonly service: StoreService) {}

  ngOnInit(): void {
    if (this.defaultStore) {
      this.inputControl.setValue(this.defaultStore);
    }
  }
}
