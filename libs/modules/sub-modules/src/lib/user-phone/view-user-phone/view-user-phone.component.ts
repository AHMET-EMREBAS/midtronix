import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhoneTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserPhone } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteUserPhoneComponent } from '../delete-user-phone/delete-user-phone.component';

@Component({
  selector: 'mdtx-view-user-phone',
  standalone: true,
  imports: [CommonModule, UserPhoneTableComponent, MatDialogModule],
  templateUrl: './view-user-phone.component.html',
  styleUrl: './view-user-phone.component.scss',
})
export class ViewUserPhoneComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IUserPhone[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteUserPhoneComponent, { data: [...items] });
  }
}
