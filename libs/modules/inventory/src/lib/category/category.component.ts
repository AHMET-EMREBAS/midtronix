/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@mdtx/material/table';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InputTextComponent } from '@mdtx/material/form';
import { ICategory } from '@mdtx/common';
import { CategoryService } from './category.service';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'mdtx-category',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    InputTextComponent,
    TableComponent,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  providers: [CategoryService],
})
export class CategoryComponent {
  searchControl = new FormControl('');

  filteredData: Observable<ICategory[]> = this.searchControl.valueChanges.pipe(
    startWith(''),
    switchMap((search) => {
      return this.categoryService.entities$.pipe(
        map((e) => {
          if (search) {
            return e.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            );
          }
          return e;
        })
      );
    })
  );
  constructor(protected readonly categoryService: CategoryService) {
    this.categoryService.addOneToCache({
      id: 1,
      name: 'Cat 1',
    } as ICategory);
    this.categoryService.addOneToCache({
      id: 2,
      name: 'Cat 2',
    } as ICategory);
  }
  deleteItems(items: Map<number, ICategory>) {
    items.forEach((value, key) => {
      console.log(value, key);
      this.categoryService.removeOneFromCache(key);
    });
  }
}
