import { Component, EventEmitter, Output } from '@angular/core';

import { MenuItem } from '@mdtx/material/core';
import { InputSearchComponent } from '@mdtx/material/form';
import { TableToolbarComponent } from '../../table-toolbar/table-toolbar.component';
@Component({
  selector: 'mdtx-category-toolbar',
  standalone: true,
  imports: [TableToolbarComponent, InputSearchComponent],
  templateUrl: './category-toolbar.component.html',
  styleUrl: './category-toolbar.component.scss',
})
export class CategoryToolbarComponent {
  leftToolbarItems: MenuItem[] = [
    {
      id: 1,
      title: 'Edit',
      icon: 'edit',
    },
  ];

  rightToolbarItems: MenuItem[] = [];

  @Output() deleteEvent = new EventEmitter();
  @Output() searchEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  clickEventHandler(event: MenuItem) {}

  searchEventHandler(searchString: string) {
    this.searchEvent.emit(searchString);
  }
}
