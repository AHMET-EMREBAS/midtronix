import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-quantity',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.scss',
})
export class QuantityComponent {}
