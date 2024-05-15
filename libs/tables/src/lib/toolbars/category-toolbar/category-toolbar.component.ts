import { Component } from '@angular/core';
import { ToolbarModules } from '../../__base';

@Component({
  selector: 'mdtx-category-toolbar',
  standalone: true,
  imports: [...ToolbarModules],
  templateUrl: './category-toolbar.component.html',
  styleUrl: './category-toolbar.component.scss',
})
export class CategoryToolbarComponent {}
