import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddressTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserAddress } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteUserAddressComponent } from '../delete-user-address/delete-user-address.component';

@Component({
  selector: 'mdtx-view-user-address',
  standalone: true,
  imports: [CommonModule, UserAddressTableComponent, MatDialogModule],
  templateUrl: './view-user-address.component.html',
  styleUrl: './view-user-address.component.scss',
})
export class ViewUserAddressComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IUserAddress[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteUserAddressComponent, { data: [...items] });
  }
}
