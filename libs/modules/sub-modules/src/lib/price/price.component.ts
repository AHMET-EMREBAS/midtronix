import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-price',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
})
export class PriceComponent {}
