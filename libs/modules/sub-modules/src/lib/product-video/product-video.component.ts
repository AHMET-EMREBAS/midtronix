import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-product-video',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './product-video.component.html',
  styleUrl: './product-video.component.scss',
})
export class ProductVideoComponent {}
