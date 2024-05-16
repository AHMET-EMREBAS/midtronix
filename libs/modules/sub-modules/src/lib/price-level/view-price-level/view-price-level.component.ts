import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceLevelTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IPriceLevel } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeletePriceLevelComponent } from '../delete-price-level/delete-price-level.component';

@Component({
  selector: 'mdtx-view-price-level',
  standalone: true,
  imports: [CommonModule, PriceLevelTableComponent, MatDialogModule],
  templateUrl: './view-price-level.component.html',
  styleUrl: './view-price-level.component.scss',
})
export class ViewPriceLevelComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IPriceLevel[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeletePriceLevelComponent, { data: [...items] });
  }
}
