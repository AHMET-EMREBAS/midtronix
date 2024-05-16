import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuFormComponent } from '@mdtx/forms';
import { ISku } from '@mdtx/common';
import { SkuService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-sku',
  standalone: true,
  imports: [CommonModule, SkuFormComponent],
  templateUrl: './create-sku.component.html',
  styleUrl: './create-sku.component.scss',
  providers: [SkuService],
})
export class CreateSkuComponent {
  constructor(protected readonly service: SkuService) {}
  handleSubmit(sku: ISku) {
    this.service.add(sku);
  }
}
