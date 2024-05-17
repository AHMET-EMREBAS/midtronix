import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoleTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomerRole } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCustomerRoleComponent } from '../delete-customer-role/delete-customer-role.component';

@Component({
  selector: 'mdtx-view-customer-role',
  standalone: true,
  imports: [CommonModule, CustomerRoleTableComponent, MatDialogModule],
  templateUrl: './view-customer-role.component.html',
  styleUrl: './view-customer-role.component.scss',
})
export class ViewCustomerRoleComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ICustomerRole[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteCustomerRoleComponent, { data: [...items] });
  }
}
