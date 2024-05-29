import { Component, EventEmitter, Output } from '@angular/core';
import { ToolbarComponent } from '@mdtx/material/toolbar';
import { MenuItem } from '@mdtx/material/core';
import { InputSearchComponent } from '@mdtx/material/form';
@Component({
  selector: 'mdtx-purchase-toolbar',
  standalone: true,
  imports: [ToolbarComponent, InputSearchComponent],
  templateUrl: './purchase-toolbar.component.html',
  styleUrl: './purchase-toolbar.component.scss',
})
export class PurchaseToolbarComponent {
  leftToolbarItems: MenuItem[] = [
    { id: 1, title: 'Mark As Delivered', icon: 'local_shipping' },
  ];
  rightToolbarItems: MenuItem[] = [
    { id: 2, title: `Delete`, icon: 'delete', iconColor: 'accent' },
  ];

  @Output() deleteEvent = new EventEmitter();
  @Output() markasDeliveredEvent = new EventEmitter();
  @Output() searchEvent = new EventEmitter();

  handleToolbarClick(event: MenuItem) {
    console.log(event);
    switch (event.id) {
      case 1:
        this.markasDeliveredEvent.emit();
        return;
      case 2:
        this.deleteEvent.emit();
        return;
    }
  }

  searchHandler(searchString: string) {
    this.searchEvent.emit(searchString);
  }
}
