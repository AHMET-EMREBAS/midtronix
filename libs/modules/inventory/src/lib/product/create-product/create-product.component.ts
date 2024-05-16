import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '@mdtx/forms';
@Component({
  selector: 'mdtx-create-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {}
