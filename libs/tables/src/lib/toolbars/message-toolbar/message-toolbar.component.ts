import { Component, EventEmitter, Output } from '@angular/core';
import { ToolbarComponent } from '@mdtx/material/toolbar';
import { MenuItem } from '@mdtx/material/core';
import { InputSearchComponent } from '@mdtx/material/form';
@Component({
  selector: 'mdtx-message-toolbar',
  standalone: true,
  imports: [ToolbarComponent, InputSearchComponent],
  templateUrl: './message-toolbar.component.html',
  styleUrl: './message-toolbar.component.scss',
})
export class MessageToolbarComponent {
  leftToolbarItems: MenuItem[] = [];
  rightToolbarItems: MenuItem[] = [{ id: 1, title: `Delete`, icon: 'delete' }];

  @Output() deleteEvent = new EventEmitter();
  @Output() searchEvent = new EventEmitter();

  handleToolbarClick(event: MenuItem) {
    switch (event.title) {
      case 'Delete':
        this.deleteEvent.emit();
        return;
    }
  }

  searchHandler(searchString: string) {
    this.searchEvent.emit(searchString);
  }
}
