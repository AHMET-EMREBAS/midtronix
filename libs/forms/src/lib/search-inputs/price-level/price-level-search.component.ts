import { AsyncPipe, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { PriceLevelService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { IPriceLevel } from '@mdtx/common';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  distinct,
  map,
  startWith,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'mdtx-price-level-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <ng-container *ngIf="searchItems$ | async"></ng-container>
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="priceLevel"
      label="Search Price Level"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [PriceLevelService],
})
export class PriceLevelSearchComponent {
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  @Input() inputControl = new FormControl<IPriceLevel | null>(null, []);
  @Input() defaultValue?: IPriceLevel;
  @Output() changeEvent = new EventEmitter<IPriceLevel>();
  @Input() firstDefault?: boolean;
  search$ = new BehaviorSubject<string>('');

  options$: Observable<IPriceLevel[]> = this.service.entities$;

  searchItems$: Observable<any> = this.search$.pipe(
    debounceTime(400),
    startWith(''),
    distinct(),
    switchMap((search) => {
      const searchValue = search.trim().toLowerCase();

      return this.service.getWithQuery({
        take: 50,
        search: searchValue,
      });
    }),
    map((data) => {
      if (this.firstDefault) {
        this.defaultValue = data[0];
      }
    })
  );

  constructor(protected readonly service: PriceLevelService) {}

  optionSelectedEventHandler(event: any) {
    this.changeEvent.emit(event);
  }

  inputEventHandler(event: any) {
    if (typeof event === 'string') {
      this.search$.next(event);
    }
  }
}
