import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '@mdtx/forms';
import { IProduct } from '@mdtx/common';
import { ProductService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
  providers: [ProductService],
})
export class CreateProductComponent {
  constructor(protected readonly service: ProductService) {}
  handleSubmit(product: IProduct) {
    this.service.add(product);
  }
}
