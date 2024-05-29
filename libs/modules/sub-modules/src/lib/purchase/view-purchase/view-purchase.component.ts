import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IPurchase } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeletePurchaseComponent } from '../delete-purchase/delete-purchase.component';

@Component({
  selector: 'mdtx-view-purchase',
  standalone: true,
  imports: [CommonModule, PurchaseTableComponent, MatDialogModule],
  templateUrl: './view-purchase.component.html',
  styleUrl: './view-purchase.component.scss',
})
export class ViewPurchaseComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IPurchase[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeletePurchaseComponent, { data: [...items] });
  }
}
