import { Component, Input, QueryList } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ITemplateRef } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-template-outlet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-outlet.component.html',
  styleUrl: './template-outlet.component.scss',
})
export class TemplateOutletComponent {
  @Input() items?: QueryList<ITemplateRef<NgTemplateOutlet>>;
}
