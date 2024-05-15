import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryService } from '@mdtx/ngrx';
import { ToolbarComponent } from '@mdtx/material/toolbar';
import { MenuItem } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-category-toolbar',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './category-toolbar.component.html',
  styleUrl: './category-toolbar.component.scss',
  providers: [CategoryService],
})
export class CategoryToolbarComponent {
  leftToolbarItems: MenuItem[] = [{ id: 1, title: `Add`, icon: 'add' }];
  rightToolbarItems: MenuItem[] = [{ id: 1, title: `Delete`, icon: 'delete' }];

  @Output() deleteEvent = new EventEmitter();
  @Output() addEvent = new EventEmitter();

  handleToolbarClick(event: MenuItem) {
    switch (event.title) {
      case 'Add':
        this.addEvent.emit();
        return;
      case 'Delete':
        this.deleteEvent.emit();
        return;
    }
  }
}
