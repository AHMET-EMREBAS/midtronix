import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturerTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IManufacturer } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteManufacturerComponent } from '../delete-manufacturer/delete-manufacturer.component';

@Component({
  selector: 'mdtx-view-manufacturer',
  standalone: true,
  imports: [CommonModule, ManufacturerTableComponent, MatDialogModule],
  templateUrl: './view-manufacturer.component.html',
  styleUrl: './view-manufacturer.component.scss',
})
export class ViewManufacturerComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IManufacturer[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteManufacturerComponent, { data: [...items] });
  }
}
