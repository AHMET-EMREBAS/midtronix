import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mdtx-mini-fab',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './mini-fab.component.html',
  styleUrl: './mini-fab.component.scss',
})
export class MiniFabComponent {
  @Input() buttonColor: 'primary' | 'accent' | 'warn' = 'primary';
}
