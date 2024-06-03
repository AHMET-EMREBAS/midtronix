import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { IProduct } from '@mdtx/common';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '@mdtx/ngrx';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'mdtx-delete-product',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss',
  providers: [ProductService],
})
export class DeleteProductComponent {
  deletedItems: number[] = [];

  constructor(
    protected readonly service: ProductService,
    @Inject(DIALOG_DATA) public readonly items: IProduct[]
  ) {}

  deleteItem(id: number) {
    this.deletedItems.push(id);
    this.service.delete(id);
  }

  deleteAll() {
    this.items.forEach((e) => {
      if (!this.deletedItems.includes(e.id)) {
        this.service.delete(e.id);
      }
    });
  }

  value(item: IProduct) {
    return Object.values(item).join(', ');
  }
}
