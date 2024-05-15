import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-statusbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './statusbar.component.html',
  styleUrl: './statusbar.component.scss',
})
export class StatusbarComponent {
  @Input() bgColor?: string;
  @Input() leftToolbarItems?: MenuItem[];
  @Input() rightToolbarItems?: MenuItem[];

  @Output() toolbarItemClickEvent = new EventEmitter<MenuItem>();
}
