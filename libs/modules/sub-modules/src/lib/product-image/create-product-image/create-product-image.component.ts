import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImageFormComponent } from '@mdtx/forms';
import { IProductImage } from '@mdtx/common';
import { ProductImageService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-product-image',
  standalone: true,
  imports: [CommonModule, ProductImageFormComponent],
  templateUrl: './create-product-image.component.html',
  styleUrl: './create-product-image.component.scss',
  providers: [ProductImageService],
})
export class CreateProductImageComponent {
  constructor(protected readonly service: ProductImageService) {}
  handleSubmit(productImage: IProductImage) {
    this.service.add(productImage);
  }
}
