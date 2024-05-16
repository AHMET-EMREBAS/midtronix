import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuantity } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteQuantityComponent } from '../delete-quantity/delete-quantity.component';

@Component({
  selector: 'mdtx-view-quantity',
  standalone: true,
  imports: [CommonModule, QuantityTableComponent, MatDialogModule],
  templateUrl: './view-quantity.component.html',
  styleUrl: './view-quantity.component.scss',
})
export class ViewQuantityComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IQuantity[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteQuantityComponent, { data: [...items] });
  }
}
