import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEmailTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomerEmail } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCustomerEmailComponent } from '../delete-customer-email/delete-customer-email.component';

@Component({
  selector: 'mdtx-view-customer-email',
  standalone: true,
  imports: [CommonModule, CustomerEmailTableComponent, MatDialogModule],
  templateUrl: './view-customer-email.component.html',
  styleUrl: './view-customer-email.component.scss',
})
export class ViewCustomerEmailComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ICustomerEmail[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteCustomerEmailComponent, { data: [...items] });
  }
}
