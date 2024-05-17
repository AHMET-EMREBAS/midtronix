import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { ProjectService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';

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
      [inputControl]="inputControl"
    ></mdtx-input-autocomplete>
  `,
  providers: [ProjectService],
})
export class ProjectSearchComponent {
  @Input() inputControl = new FormControl('', []);

  constructor(protected readonly service: ProjectService) {}
}
