import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductVideoTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductVideo } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteProductVideoComponent } from '../delete-product-video/delete-product-video.component';

@Component({
  selector: 'mdtx-view-product-video',
  standalone: true,
  imports: [CommonModule, ProductVideoTableComponent, MatDialogModule],
  templateUrl: './view-product-video.component.html',
  styleUrl: './view-product-video.component.scss',
})
export class ViewProductVideoComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IProductVideo[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteProductVideoComponent, { data: [...items] });
  }
}
