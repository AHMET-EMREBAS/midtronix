import { AsyncPipe, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { PriceLevelService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { IPriceLevelRaw } from '@mdtx/common';

@Component({
  selector: 'mdtx-price-level-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="price-level"
      label="Search PriceLevel"
      prefixIcon="search"
      [inputControl]="inputControl"
    ></mdtx-input-autocomplete>
  `,
  providers: [PriceLevelService],
})
export class PriceLevelSearchComponent implements OnInit {
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  @Input() inputControl = new FormControl<IPriceLevelRaw | null>(null, []);

  @Input() defaultPriceLevel?: IPriceLevelRaw;

  constructor(protected readonly service: PriceLevelService) {}

  ngOnInit(): void {
    if (this.defaultPriceLevel) {
      this.inputControl.setValue(this.defaultPriceLevel);
    }
  }

  selectById(id: number) {
   const foundOption =  this.inputRef.options.find((e) => e.id == id);

   this.inputRef
  }
}
