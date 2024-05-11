/* eslint-disable @nx/enforce-module-boundaries */
import { ICategory } from '@mdtx/common';
import { CategoryService } from './category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import {
  BaseFormComponent,
  CommonFormModule,
  InputTextComponent,
} from '@mdtx/material/form';

let id = 400;
@Component({
  standalone: true,
  selector: 'mdtx-category-form',
  imports: [CommonFormModule, InputTextComponent],
  providers: [CategoryService],
  template: `
    <form
      style="padding: 1em; display: flex; flex-direction: column; gap: 1em; padding-bottom: 3em; height: 500px; overflow-y: auto;"
      novalidate
    >
      <mdtx-input-text
        inputName="name"
        [formControl]="nameControl"
        label="Category Name"
        icon="category"
        autocomplete="off"
      ></mdtx-input-text>

      <div style="display: flex; gap: 1em;">
        <button
          mat-raised-button
          color="primary"
          type="button"
          (click)="formSubmit()"
        >
          Submit
        </button>
        <button mat-stroked-button type="button" (click)="formReset()">
          Reset
        </button>
      </div>
    </form>
  `,
})
export class CategoryFormComponent extends BaseFormComponent {
  nameControl = new FormControl('', []);
  override formGroup = new FormGroup({
    name: this.nameControl,
  });
  constructor(protected readonly categoryService: CategoryService) {
    super();
  }

  override formSubmit() {
    super.formSubmit();
    this.categoryService.addOneToCache({
      id: id++,
      ...(this.formGroup.value as any),
    });
  }
}
