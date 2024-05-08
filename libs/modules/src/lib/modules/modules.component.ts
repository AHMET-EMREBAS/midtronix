import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css',
})
export class ModulesComponent {}
