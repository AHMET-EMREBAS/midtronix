import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImageTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductImage } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteProductImageComponent } from '../delete-product-image/delete-product-image.component';

@Component({
  selector: 'mdtx-view-product-image',
  standalone: true,
  imports: [CommonModule, ProductImageTableComponent, MatDialogModule],
  templateUrl: './view-product-image.component.html',
  styleUrl: './view-product-image.component.scss',
})
export class ViewProductImageComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IProductImage[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteProductImageComponent, { data: [...items] });
  }
}
