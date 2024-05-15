import { Component, Input } from '@angular/core';
import { ToolbarModules } from '../../__base';
import { CategoryService } from '@mdtx/ngrx';
import { ICategory } from '@mdtx/common';

@Component({
  selector: 'mdtx-category-toolbar',
  standalone: true,
  imports: [...ToolbarModules],
  templateUrl: './category-toolbar.component.html',
  styleUrl: './category-toolbar.component.scss',
  providers: [CategoryService],
})
export class CategoryToolbarComponent {

  constructor(protected readonly service: CategoryService) {}
}
