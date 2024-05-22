import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IDiscount } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteDiscountComponent } from '../delete-discount/delete-discount.component';

@Component({
  selector: 'mdtx-view-discount',
  standalone: true,
  imports: [CommonModule, DiscountTableComponent, MatDialogModule],
  templateUrl: './view-discount.component.html',
  styleUrl: './view-discount.component.scss',
})
export class ViewDiscountComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IDiscount[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteDiscountComponent, { data: [...items] });
  }
}
