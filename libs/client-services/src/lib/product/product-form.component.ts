import { Component } from '@angular/core';
import {
  BaseFormComponent,
  InputTextComponent,
  InputTextareaComponent,
} from '@mdtx/material/form';
import { ProductForm } from '../forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'mdtx-product-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    InputTextComponent,
    InputTextareaComponent,
  ],
  template: `
    <h1>Create Product</h1>
    <form>
      <mdtx-input-text
        [formControl]="control('name')"
        inputName="name"
        label="Product Name"
      ></mdtx-input-text>

      <mdtx-input-textarea
        inputName="description"
        label="Description"
        [formControl]="control('description')"
      ></mdtx-input-textarea>

      <mdtx-input-text
        [formControl]="control('upc')"
        inputName="upc"
        label="UPC"
      ></mdtx-input-text>
      <mdtx-input-text
        [formControl]="control('category')"
        inputName="category"
        label="Category"
      ></mdtx-input-text>

      <mdtx-input-text
        [formControl]="control('department')"
        inputName="department"
        label="Department"
      ></mdtx-input-text>

      <mdtx-input-text
        [formControl]="control('manufacturers')"
        inputName="manufacturers"
        label="Manufacturer"
      ></mdtx-input-text>

      <div class="actions">
        <button mat-raised-button color="primary" (click)="formSubmit()">
          Save Product
        </button>
        <button mat-raised-button (click)="formReset()">Reset</button>
      </div>
    </form>
  `,
})
export class ProductFormComponent extends BaseFormComponent {
  override formGroup = ProductForm.formGroup();
}
