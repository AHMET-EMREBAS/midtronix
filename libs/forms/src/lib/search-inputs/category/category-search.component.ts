/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncPipe, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { CategoryService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { ICategory } from '@mdtx/common';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  distinct,
  map,
  startWith,
} from 'rxjs';

@Component({
  selector: 'mdtx-category-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="category"
      label="Search Category"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [CategoryService],
})
export class CategorySearchComponent {
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  @Input() inputControl = new FormControl<ICategory | null>(null, []);
  @Input() defaultValue?: ICategory;
  @Output() changeEvent = new EventEmitter<ICategory>();

  search$ = new BehaviorSubject<string>('');

  options$: Observable<ICategory[]> = this.service.entities$;

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

  constructor(protected readonly service: CategoryService) {}

  optionSelectedEventHandler(event: any) {
    this.changeEvent.emit(event);
  }

  inputEventHandler(event: any) {
    if (typeof event === 'string') {
      this.search$.next(event);
    }
  }
}
