import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'mdtx-view-user',
  standalone: true,
  imports: [CommonModule, UserTableComponent, MatDialogModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss',
})
export class ViewUserComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IUser[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteUserComponent, { data: [...items] });
  }
}
