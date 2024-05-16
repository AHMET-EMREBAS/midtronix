import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IStore } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteStoreComponent } from '../delete-store/delete-store.component';

@Component({
  selector: 'mdtx-view-store',
  standalone: true,
  imports: [CommonModule, StoreTableComponent, MatDialogModule],
  templateUrl: './view-store.component.html',
  styleUrl: './view-store.component.scss',
})
export class ViewStoreComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IStore[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteStoreComponent, { data: [...items] });
  }
}
