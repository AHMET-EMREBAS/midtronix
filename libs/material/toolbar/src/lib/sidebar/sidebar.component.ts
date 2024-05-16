import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavlistItem } from '@mdtx/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'mdtx-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() bgColor?: string;
  @Input() topToolbarItems?: NavlistItem[];
  @Input() bottomToolbarItems?: NavlistItem[];
  @Input() tooltipPosition: TooltipPosition = 'right';
  @Output() toolbarItemClickEvent = new EventEmitter<NavlistItem>();

  handleClick(item: NavlistItem) {
    this.topToolbarItems?.forEach((e) => (e.isActive = false));
    this.bottomToolbarItems?.forEach((e) => (e.isActive = false));

    item.isActive = true;
    this.toolbarItemClickEvent.emit(item);
  }
}
