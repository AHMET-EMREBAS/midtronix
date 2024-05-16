import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IPermission } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeletePermissionComponent } from '../delete-permission/delete-permission.component';

@Component({
  selector: 'mdtx-view-permission',
  standalone: true,
  imports: [CommonModule, PermissionTableComponent, MatDialogModule],
  templateUrl: './view-permission.component.html',
  styleUrl: './view-permission.component.scss',
})
export class ViewPermissionComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IPermission[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeletePermissionComponent, { data: [...items] });
  }
}
