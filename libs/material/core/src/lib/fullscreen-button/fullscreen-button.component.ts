import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenDirective } from '../directives';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mdtx-fullscreen-button',
  standalone: true,
  imports: [CommonModule, FullscreenDirective, MatButtonModule, MatIconModule],
  templateUrl: './fullscreen-button.component.html',
  styleUrl: './fullscreen-button.component.scss',
})
export class FullscreenButtonComponent {
  @Input() fullscreenContainerRef!: HTMLDivElement;
}
