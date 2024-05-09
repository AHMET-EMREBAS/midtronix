import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { provideErrorStateMatcher } from '@mdtx/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { of } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService, provideErrorStateMatcher()],
})
export class ProductComponent {
  categories$ = of([
    { id: 1, name: 'Cat 1' },
    { id: 2, name: 'Cat 2' },
    { id: 3, name: 'Cat 3' },
  ]);

  formGroup = this.builder.nonNullable.group({
    name: ['', Validators.required],
    description: [''],
    upc: [undefined, Validators.required],
    category: [undefined],
    manufacturer: [undefined],
  });

  constructor(
    protected readonly builder: FormBuilder,
    protected readonly productService: ProductService
  ) {}

  save() {
    this.productService.addOneToCache({ id: 1, ...this.formGroup.value });
  }

  displayWith(event: any) {
    return event.name;
  }
}
