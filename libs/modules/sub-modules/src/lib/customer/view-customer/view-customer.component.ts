import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';

@Component({
  selector: 'mdtx-view-customer',
  standalone: true,
  imports: [CommonModule, CustomerTableComponent, MatDialogModule],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.scss',
})
export class ViewCustomerComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ICustomer[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteCustomerComponent, { data: [...items] });
  }
}
