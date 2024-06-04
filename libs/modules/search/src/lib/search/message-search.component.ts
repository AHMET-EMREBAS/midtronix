import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IMessage } from '@mdtx/common';
import { MessageService } from '@mdtx/modules/ngrx';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { BaseSearchComponent } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-message-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, InputAutocompleteComponent],
  template: `
    <ng-container *ngIf="searchItems$ | async"></ng-container>
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="message"
      label="Search Message"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [MessageService],
})
export class MessageSearchComponent extends BaseSearchComponent<IMessage> {}
