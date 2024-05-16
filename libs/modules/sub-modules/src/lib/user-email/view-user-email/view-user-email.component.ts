import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEmailTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserEmail } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteUserEmailComponent } from '../delete-user-email/delete-user-email.component';

@Component({
  selector: 'mdtx-view-user-email',
  standalone: true,
  imports: [CommonModule, UserEmailTableComponent, MatDialogModule],
  templateUrl: './view-user-email.component.html',
  styleUrl: './view-user-email.component.scss',
})
export class ViewUserEmailComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IUserEmail[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteUserEmailComponent, { data: [...items] });
  }
}
