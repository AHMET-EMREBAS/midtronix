import { AsyncPipe, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { PriceLevelService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { IPriceLevelRaw } from '@mdtx/common';
import { Subscription, debounceTime } from 'rxjs';

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
      [defaultValue]="defaultPriceLevel"
      [inputControl]="inputControl"
      (inputEvent)="changeEvent.emit($event)"
    ></mdtx-input-autocomplete>
  `,
  providers: [PriceLevelService],
})
export class PriceLevelSearchComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  @Input() inputControl = new FormControl<IPriceLevelRaw | null>(null, []);

  @Input() defaultPriceLevel?: IPriceLevelRaw;

  @Output() changeEvent = new EventEmitter<IPriceLevelRaw>();

  sub!: Subscription;
  constructor(protected readonly service: PriceLevelService) {}

  ngOnInit(): void {
    if (this.defaultPriceLevel) {
      this.inputControl.setValue(this.defaultPriceLevel);
    }
  }

  ngAfterViewInit(): void {
    this.sub = this.inputControl.valueChanges
      .pipe(debounceTime(600))
      .subscribe((data) => {
        if (data) {
          this.changeEvent.emit(data);
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
