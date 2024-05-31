import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { FormControl } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ICustomerPhone } from '@mdtx/common';
import { CustomerPhoneService } from '@mdtx/ngrx';
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
  selector: 'mdtx-customer-phone-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, InputAutocompleteComponent],
  template: `
    <ng-container *ngIf="searchItems$ | async"></ng-container>
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="customerPhone"
      label="Search CustomerPhone"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [CustomerPhoneService],
})
export class CustomerPhoneSearchComponent {
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  @Input() inputControl = new FormControl<ICustomerPhone | null>(null, []);
  @Input() defaultValue?: ICustomerPhone;
  @Output() changeEvent = new EventEmitter<ICustomerPhone>();

  search$ = new BehaviorSubject<string>('');

  options$: Observable<ICustomerPhone[]> = this.service.entities$;

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

  constructor(protected readonly service: CustomerPhoneService) {}

  optionSelectedEventHandler(event: any) {
    this.changeEvent.emit(event);
  }

  inputEventHandler(event: any) {
    if (typeof event === 'string') {
      this.search$.next(event);
    }
  }
}
