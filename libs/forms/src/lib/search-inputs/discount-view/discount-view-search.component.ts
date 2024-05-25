import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { DiscountViewService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IInputOption } from '@mdtx/material/core';
import { IDiscountViewRaw } from '@mdtx/common';

@Component({
  selector: 'mdtx-discount-view-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="options$ | async as options"
      [options]="options"
      inputName="discount-view"
      label="Search DiscountView"
      prefixIcon="search"
      [inputControl]="inputControl"
    ></mdtx-input-autocomplete>
  `,
  providers: [DiscountViewService],
})
export class DiscountViewSearchComponent implements OnInit {
  options$: Observable<IDiscountViewRaw[]> = this.service.entities$;

  @Input() inputControl = new FormControl<IDiscountViewRaw | null>(null, []);
  @Input() skuId!: number;

  constructor(protected readonly service: DiscountViewService) {}

  ngOnInit(): void {
    this.service.clearCache();
    this.service.getWithQuery({ skuId: this.skuId });
  }
}
