import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductVideoFormComponent } from '@mdtx/forms';
import { IProductVideo } from '@mdtx/common';
import { ProductVideoService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-product-video',
  standalone: true,
  imports: [CommonModule, ProductVideoFormComponent],
  templateUrl: './create-product-video.component.html',
  styleUrl: './create-product-video.component.scss',
  providers: [ProductVideoService],
})
export class CreateProductVideoComponent {
  constructor(protected readonly service: ProductVideoService) {}
  handleSubmit(productVideo: IProductVideo) {
    this.service.add(productVideo);
  }
}
