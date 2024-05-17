import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPermissionTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomerPermission } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCustomerPermissionComponent } from '../delete-customer-permission/delete-customer-permission.component';

@Component({
  selector: 'mdtx-view-customer-permission',
  standalone: true,
  imports: [CommonModule, CustomerPermissionTableComponent, MatDialogModule],
  templateUrl: './view-customer-permission.component.html',
  styleUrl: './view-customer-permission.component.scss',
})
export class ViewCustomerPermissionComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ICustomerPermission[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteCustomerPermissionComponent, {
      data: [...items],
    });
  }
}
