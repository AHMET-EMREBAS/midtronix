import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { ProjectService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-project-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="project"
      label="Search Project"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [ProjectService],
})
export class ProjectSearchComponent {
  constructor(protected readonly service: ProjectService) {}
}
