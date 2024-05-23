import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniFabComponent } from '../mini-fab/mini-fab.component';

@Component({
  selector: 'mdtx-close-button',
  standalone: true,
  imports: [CommonModule, MiniFabComponent],
  templateUrl: './close-button.component.html',
  styleUrl: './close-button.component.scss',
})
export class CloseButtonComponent {}
