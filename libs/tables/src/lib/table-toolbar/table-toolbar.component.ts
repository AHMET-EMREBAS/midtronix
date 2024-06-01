import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@mdtx/material/core';
import { ToolbarComponent } from '@mdtx/material/toolbar';

@Component({
  selector: 'mdtx-table-toolbar',
  standalone: true,
  imports: [CommonModule, ToolbarComponent],
  templateUrl: './table-toolbar.component.html',
  styleUrl: './table-toolbar.component.scss',
})
export class TableToolbarComponent {
  @Input() leftToolbarItems?: MenuItem[];
  @Input() rightToolbarItems?: MenuItem[];
  @Output() clickEvent = new EventEmitter<MenuItem>();
  @Output() searchEvent = new EventEmitter<string>();
}
