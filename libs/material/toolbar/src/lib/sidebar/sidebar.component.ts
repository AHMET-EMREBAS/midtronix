import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-sidebar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() bgColor?: string;
  @Input() topToolbarItems?: MenuItem[];
  @Input() bottomToolbarItems?: MenuItem[];

  @Output() toolbarItemClickEvent = new EventEmitter<MenuItem>();
}
