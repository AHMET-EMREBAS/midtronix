import { Component, EventEmitter, Output } from '@angular/core';
import { ToolbarComponent } from '@mdtx/material/toolbar';
import { MenuItem } from '@mdtx/material/core';
import { InputSearchComponent } from '@mdtx/material/form';
@Component({
  selector: 'mdtx-ticket-toolbar',
  standalone: true,
  imports: [ToolbarComponent, InputSearchComponent],
  templateUrl: './ticket-toolbar.component.html',
  styleUrl: './ticket-toolbar.component.scss',
})
export class TicketToolbarComponent {
  leftToolbarItems: MenuItem[] = [{ id: 1, title: `Add`, icon: 'add' }];
  rightToolbarItems: MenuItem[] = [{ id: 1, title: `Delete`, icon: 'delete' }];

  @Output() deleteEvent = new EventEmitter();
  @Output() addEvent = new EventEmitter();
  @Output() searchEvent = new EventEmitter();

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

  searchHandler(searchString: string) {
    this.searchEvent.emit(searchString);
  }
}