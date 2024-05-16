import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-sku',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './sku.component.html',
  styleUrl: './sku.component.scss',
})
export class SkuComponent {}
