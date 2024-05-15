import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';

import { CategoryService } from '@mdtx/ngrx';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'mdtx-category-search',
  standalone: true,
  imports: [CommonModule, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      #inputRef
      [options]="(service.entities$ | async) ?? []"
      label="Search Category"
      prefixIcon="category"
    ></mdtx-input-autocomplete>
  `,
  providers: [CategoryService],
})
export class CategorySearchComponent implements AfterViewInit, OnDestroy {
  @ViewChild('inputRef') inputRef!: InputAutocompleteComponent;
  constructor(protected readonly service: CategoryService) {}

  sub!: Subscription;

  ngAfterViewInit(): void {
    this.sub = this.inputRef.$valueChange
      .pipe(debounceTime(600))
      .subscribe((search) => {
        this.service.getWithQuery({ take: 20, search });
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
