import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IUser } from '@mdtx/common';
import { UserService } from '@mdtx/modules/ngrx';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { BaseSearchComponent } from '@mdtx/material/core';

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
export class UserSearchComponent extends BaseSearchComponent<IUser> {}
