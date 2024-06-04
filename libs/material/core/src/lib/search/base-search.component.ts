import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  distinct,
  map,
  startWith,
} from 'rxjs';
import { CollectionBaseService } from '../service';
import { IID } from '@mdtx/common';

@Component({ template: '' })
export class BaseSearchComponent<T extends IID> {
  @Input() inputControl = new FormControl<T | null>(null, []);
  @Input() defaultValue?: T;
  @Output() changeEvent = new EventEmitter<T>();

  search$ = new BehaviorSubject<string>('');

  options$: Observable<T[]> = this.service.entities$;

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
  constructor(protected readonly service: CollectionBaseService<T>) {}

  optionSelectedEventHandler(event: any) {
    this.changeEvent.emit(event);
  }

  inputEventHandler(event: any) {
    if (typeof event === 'string') {
      this.search$.next(event);
    }
  }
}
