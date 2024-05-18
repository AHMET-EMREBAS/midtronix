import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mdtx-card-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-avatar.component.html',
  styleUrl: './card-avatar.component.scss',
})
export class CardAvatarComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
