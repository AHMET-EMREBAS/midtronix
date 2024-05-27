import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAccountTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomerAccount } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCustomerAccountComponent } from '../delete-customer-account/delete-customer-account.component';

@Component({
  selector: 'mdtx-view-customer-account',
  standalone: true,
  imports: [CommonModule, CustomerAccountTableComponent, MatDialogModule],
  templateUrl: './view-customer-account.component.html',
  styleUrl: './view-customer-account.component.scss',
})
export class ViewCustomerAccountComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ICustomerAccount[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteCustomerAccountComponent, { data: [...items] });
  }
}
