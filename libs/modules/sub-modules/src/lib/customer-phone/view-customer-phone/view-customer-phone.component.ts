import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPhoneTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomerPhone } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCustomerPhoneComponent } from '../delete-customer-phone/delete-customer-phone.component';

@Component({
  selector: 'mdtx-view-customer-phone',
  standalone: true,
  imports: [CommonModule, CustomerPhoneTableComponent, MatDialogModule],
  templateUrl: './view-customer-phone.component.html',
  styleUrl: './view-customer-phone.component.scss',
})
export class ViewCustomerPhoneComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ICustomerPhone[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteCustomerPhoneComponent, { data: [...items] });
  }
}
