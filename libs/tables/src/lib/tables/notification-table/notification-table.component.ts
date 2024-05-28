import { Component } from '@angular/core';
import { NotificationViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { NotificationViewToolbarComponent } from '../../toolbars';
import {
  NOTIFICATION_COLUMNS,
  NOTIFICATION_DISPLAY_COLUMNS,
  NOTIFICATION_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { INotificationViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-notification-view-table',
  standalone: true,
  imports: [...TableModules, NotificationViewToolbarComponent],
  templateUrl: './notification-view-table.component.html',
  styleUrl: './notification-view-table.component.scss',
  providers: [NotificationViewService],
})
export class NotificationViewTableComponent extends BaseTableComponent<INotificationViewRaw> {
  override pageIndex = 0;
  override pageSize = NOTIFICATION_PAGE_SIZE;
  override columns = NOTIFICATION_COLUMNS;
  override displayedColumns = NOTIFICATION_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: NotificationViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
