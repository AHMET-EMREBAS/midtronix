import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { FormControl } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ISku } from '@mdtx/common';
import { SkuService } from '@mdtx/ngrx';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  distinct,
  map,
  startWith,
} from 'rxjs';

@Component({
  selector: 'mdtx-sku-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, InputAutocompleteComponent],
  template: `
    <ng-container *ngIf="searchItems$ | async"></ng-container>
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="sku"
      label="Search Sku"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [SkuService],
})
export class SkuSearchComponent {
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  @Input() inputControl = new FormControl<ISku | null>(null, []);
  @Input() defaultValue?: ISku;
  @Output() changeEvent = new EventEmitter<ISku>();

  search$ = new BehaviorSubject<string>('');

  options$: Observable<ISku[]> = this.service.entities$;

  searchItems$: Observable<any> = this.search$.pipe(
    debounceTime(400),
    startWith(''),
    distinct(),
    map((search) => {
      const searchValue = search.trim().toLowerCase();
      return this.service.getWithQuery({
        take: 10,
        search: searchValue,
      });
    })
  );

  constructor(protected readonly service: SkuService) {}

  optionSelectedEventHandler(event: any) {
    this.changeEvent.emit(event);
  }

  inputEventHandler(event: any) {
    if (typeof event === 'string') {
      this.search$.next(event);
    }
  }
}
