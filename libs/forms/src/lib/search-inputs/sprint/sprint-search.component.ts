import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { SprintService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-sprint-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="sprint"
      label="Search Sprint"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [SprintService],
})
export class SprintSearchComponent {
  constructor(protected readonly service: SprintService) {}
}
