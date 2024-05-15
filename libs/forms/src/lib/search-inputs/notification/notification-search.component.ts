import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { NotificationService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-notification-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="notification"
      label="Search Notification"
      prefixIcon="search"
    ></mdtx-input-autocomplete>
  `,
  providers: [NotificationService],
})
export class NotificationSearchComponent {
  constructor(protected readonly service: NotificationService) {}
}
