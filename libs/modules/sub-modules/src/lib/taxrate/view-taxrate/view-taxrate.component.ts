import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxrateTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ITaxrate } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteTaxrateComponent } from '../delete-taxrate/delete-taxrate.component';

@Component({
  selector: 'mdtx-view-taxrate',
  standalone: true,
  imports: [CommonModule, TaxrateTableComponent, MatDialogModule],
  templateUrl: './view-taxrate.component.html',
  styleUrl: './view-taxrate.component.scss',
})
export class ViewTaxrateComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ITaxrate[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteTaxrateComponent, { data: [...items] });
  }
}
