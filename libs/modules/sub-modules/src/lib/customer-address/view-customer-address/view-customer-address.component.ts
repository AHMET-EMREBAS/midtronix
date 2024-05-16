import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddressTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomerAddress } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCustomerAddressComponent } from '../delete-customer-address/delete-customer-address.component';

@Component({
  selector: 'mdtx-view-customer-address',
  standalone: true,
  imports: [CommonModule, CustomerAddressTableComponent, MatDialogModule],
  templateUrl: './view-customer-address.component.html',
  styleUrl: './view-customer-address.component.scss',
})
export class ViewCustomerAddressComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ICustomerAddress[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteCustomerAddressComponent, { data: [...items] });
  }
}
