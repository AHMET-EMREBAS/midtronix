import { AsyncPipe, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { StoreService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { IStoreRaw } from '@mdtx/common';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'mdtx-store-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="service.asOptions$ | async as options"
      [options]="options"
      inputName="store"
      label="Search Store"
      prefixIcon="search"
      [inputControl]="inputControl"
    ></mdtx-input-autocomplete>
  `,
  providers: [StoreService],
})
export class StoreSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() inputControl = new FormControl<IStoreRaw | null>(null, []);
  @Input() defaultStore?: IStoreRaw;

  @Output() changeEvent = new EventEmitter();
  constructor(protected readonly service: StoreService) {}

  ngOnInit(): void {
    if (this.defaultStore) {
      this.inputControl.setValue(this.defaultStore);
    }
  }
  sub!: Subscription;

  ngAfterViewInit(): void {
    this.sub = this.inputControl.valueChanges
      .pipe(debounceTime(600))
      .subscribe((data) => {
        if (data) {
          this.changeEvent.emit(data);
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
