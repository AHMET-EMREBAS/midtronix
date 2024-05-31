import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { FormControl } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IUser } from '@mdtx/common';
import { UserService } from '@mdtx/ngrx';
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
  selector: 'mdtx-user-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, InputAutocompleteComponent],
  template: `
    <ng-container *ngIf="searchItems$ | async"></ng-container>
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="user"
      label="Search User"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [UserService],
})
export class UserSearchComponent {
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  @Input() inputControl = new FormControl<IUser | null>(null, []);
  @Input() defaultValue?: IUser;
  @Output() changeEvent = new EventEmitter<IUser>();

  search$ = new BehaviorSubject<string>('');

  options$: Observable<IUser[]> = this.service.entities$;

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

  constructor(protected readonly service: UserService) {}

  optionSelectedEventHandler(event: any) {
    this.changeEvent.emit(event);
  }

  inputEventHandler(event: any) {
    if (typeof event === 'string') {
      this.search$.next(event);
    }
  }
}
