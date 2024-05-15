import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { TaskService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-task-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="task"
      label="Search Task"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [TaskService],
})
export class TaskSearchComponent {
  constructor(protected readonly service: TaskService) {}
}
