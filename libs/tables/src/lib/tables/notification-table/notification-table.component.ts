import { Component } from '@angular/core';
import { NotificationService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { NotificationToolbarComponent } from '../../toolbars';
import {
  NOTIFICATION_COLUMNS,
  NOTIFICATION_DISPLAY_COLUMNS,
  NOTIFICATION_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { INotificationRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-notification-table',
  standalone: true,
  imports: [...TableModules, NotificationToolbarComponent],
  templateUrl: './notification-table.component.html',
  styleUrl: './notification-table.component.scss',
  providers: [NotificationService],
})
export class NotificationTableComponent extends BaseTableComponent<INotificationRaw> {
  override pageIndex = 0;
  override pageSize = NOTIFICATION_PAGE_SIZE;
  override columns = NOTIFICATION_COLUMNS;
  override displayedColumns = NOTIFICATION_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: NotificationService, protected readonly router: Router) {
    super(service);
  }
}
