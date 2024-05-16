import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'mdtx-view-product',
  standalone: true,
  imports: [CommonModule, ProductTableComponent, MatDialogModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss',
})
export class ViewProductComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IProduct[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteProductComponent, { data: [...items] });
  }
}
