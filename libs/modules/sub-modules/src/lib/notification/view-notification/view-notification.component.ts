import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { INotification } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteNotificationComponent } from '../delete-notification/delete-notification.component';

@Component({
  selector: 'mdtx-view-notification',
  standalone: true,
  imports: [CommonModule, NotificationTableComponent, MatDialogModule],
  templateUrl: './view-notification.component.html',
  styleUrl: './view-notification.component.scss',
})
export class ViewNotificationComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: INotification[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteNotificationComponent, { data: [...items] });
  }
}
