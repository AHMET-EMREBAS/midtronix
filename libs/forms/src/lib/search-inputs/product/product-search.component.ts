import { AsyncPipe, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { ProductService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  distinct,
  map,
  startWith,
} from 'rxjs';
import { IProduct } from '@mdtx/common';

@Component({
  selector: 'mdtx-product-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="product"
      label="Search Product"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
    ></mdtx-input-autocomplete>
    <ng-container *ngIf="searchProduct$ | async"></ng-container>
  `,
  providers: [ProductService],
})
export class ProductSearchComponent {
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  @Input() inputControl = new FormControl('', []);
  @Output() selectedEvent = new EventEmitter<IProduct>();

  search$ = new BehaviorSubject<string>('');

  options$: Observable<IProduct[]> = this.service.entities$;

  searchProduct$: Observable<any> = this.search$.pipe(
    debounceTime(400),
    startWith(''),
    distinct(),
    map((search) => {
      const searchValue = search.trim().toLowerCase();
      return this.service.getWithQuery({
        take: 50,
        search: searchValue,
      });
    })
  );

  constructor(protected readonly service: ProductService) {}

  optionSelectedEventHandler(event: any) {
    this.selectedEvent.emit(event);
  }

  inputEventHandler(event: any) {
    if (typeof event === 'string') {
      this.search$.next(event);
    }
  }
}
