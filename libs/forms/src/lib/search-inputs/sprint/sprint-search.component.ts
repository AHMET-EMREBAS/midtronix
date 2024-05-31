import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { FormControl } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ISprint } from '@mdtx/common';
import { SprintService } from '@mdtx/ngrx';
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
  selector: 'mdtx-sprint-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, InputAutocompleteComponent],
  template: `
    <ng-container *ngIf="searchItems$ | async"></ng-container>
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="sprint"
      label="Search Sprint"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [SprintService],
})
export class SprintSearchComponent {
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  @Input() inputControl = new FormControl<ISprint | null>(null, []);
  @Input() defaultValue?: ISprint;
  @Output() changeEvent = new EventEmitter<ISprint>();

  search$ = new BehaviorSubject<string>('');

  options$: Observable<ISprint[]> = this.service.entities$;

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

  constructor(protected readonly service: SprintService) {}

  optionSelectedEventHandler(event: any) {
    this.changeEvent.emit(event);
  }

  inputEventHandler(event: any) {
    if (typeof event === 'string') {
      this.search$.next(event);
    }
  }
}
