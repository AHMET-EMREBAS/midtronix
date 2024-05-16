import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFormComponent } from '@mdtx/forms';
import { ICategory } from '@mdtx/common';
import { CategoryService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-category',
  standalone: true,
  imports: [CommonModule, CategoryFormComponent],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss',
  providers: [CategoryService],
})
export class CreateCategoryComponent {
  constructor(protected readonly service: CategoryService) {}
  handleSubmit(category: ICategory) {
    this.service.add(category);
  }
}
