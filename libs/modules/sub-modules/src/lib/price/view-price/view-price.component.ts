import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IPrice } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeletePriceComponent } from '../delete-price/delete-price.component';

@Component({
  selector: 'mdtx-view-price',
  standalone: true,
  imports: [CommonModule, PriceTableComponent, MatDialogModule],
  templateUrl: './view-price.component.html',
  styleUrl: './view-price.component.scss',
})
export class ViewPriceComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IPrice[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeletePriceComponent, { data: [...items] });
  }
}
