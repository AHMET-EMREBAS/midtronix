import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-category',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {}
