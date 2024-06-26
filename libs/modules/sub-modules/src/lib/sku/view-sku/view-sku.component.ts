import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuTableComponent, SkuViewTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ISku, ISkuView } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteSkuComponent } from '../delete-sku/delete-sku.component';

@Component({
  selector: 'mdtx-view-sku',
  standalone: true,
  imports: [
    CommonModule,
    SkuTableComponent,
    SkuViewTableComponent,
    MatDialogModule,
  ],
  templateUrl: './view-sku.component.html',
  styleUrl: './view-sku.component.scss',
})
export class ViewSkuComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ISkuView[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteSkuComponent, { data: [...items] });
  }
}
