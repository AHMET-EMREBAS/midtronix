import { Component, Input, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mdtx-error-messsage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-messsage.component.html',
  styleUrl: './error-messsage.component.scss',
})
export class ErrorMesssageComponent {
  isDevMode = isDevMode();
  @Input() message = '';
  @Input() errorCondition?: boolean;
}
