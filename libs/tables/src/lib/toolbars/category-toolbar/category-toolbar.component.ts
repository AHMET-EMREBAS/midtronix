import { Component, EventEmitter, Output } from '@angular/core';
import { ToolbarModules } from '../../__base';
import { CategoryService } from '@mdtx/ngrx';

@Component({
  selector: 'mdtx-category-toolbar',
  standalone: true,
  imports: [...ToolbarModules],
  templateUrl: './category-toolbar.component.html',
  styleUrl: './category-toolbar.component.scss',
  providers: [CategoryService],
})
export class CategoryToolbarComponent {
  @Output() deleteSelectionEvent = new EventEmitter();
  @Output() addNewItemEvent = new EventEmitter();

  deleteSelection() {
    this.deleteSelectionEvent.emit();
  }

  addNewItem() {
    this.addNewItemEvent.emit();
  }
}
