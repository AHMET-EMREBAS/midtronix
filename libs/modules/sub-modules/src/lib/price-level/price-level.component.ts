import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-price-level',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './price-level.component.html',
  styleUrl: './price-level.component.scss',
})
export class PriceLevelComponent {}
