import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IProject } from '@mdtx/common';
import { ProjectService } from '@mdtx/modules/ngrx';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { BaseSearchComponent } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-project-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, InputAutocompleteComponent],
  template: `
    <ng-container *ngIf="searchItems$ | async"></ng-container>
    <mdtx-input-autocomplete
      #inputRef
      *ngIf="options$ | async as options"
      [options]="options"
      [inputControl]="inputControl"
      inputName="project"
      label="Search Project"
      prefixIcon="search"
      (optionSelectedEvent)="optionSelectedEventHandler($event)"
      (inputEvent)="inputEventHandler($event)"
      [defaultValue]="defaultValue"
    ></mdtx-input-autocomplete>
  `,
  providers: [ProjectService],
})
export class ProjectSearchComponent extends BaseSearchComponent<IProject> {}
