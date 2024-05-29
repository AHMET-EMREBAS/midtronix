import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '@mdtx/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'mdtx-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input() bgColor?: string;
  @Input() leftToolbarItems?: MenuItem[];
  @Input() rightToolbarItems?: MenuItem[];

  @Output() toolbarItemClickEvent = new EventEmitter<MenuItem>();
}
