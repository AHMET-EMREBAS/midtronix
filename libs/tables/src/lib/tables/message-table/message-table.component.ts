import { Component } from '@angular/core';
import { MessageViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { MessageViewToolbarComponent } from '../../toolbars';
import {
  MESSAGE_VIEW_COLUMNS,
  MESSAGE_VIEW_DISPLAY_COLUMNS,
  MESSAGE_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IMessageViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-message-view-table',
  standalone: true,
  imports: [...TableModules, MessageViewToolbarComponent],
  templateUrl: './message-view-table.component.html',
  styleUrl: './message-view-table.component.scss',
  providers: [MessageViewService],
})
export class MessageViewTableComponent extends BaseTableComponent<IMessageViewRaw> {
  override pageIndex = 0;
  override pageSize = MESSAGE_VIEW_PAGE_SIZE;
  override columns = MESSAGE_VIEW_COLUMNS;
  override displayedColumns = MESSAGE_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: MessageViewService, protected readonly router: Router) {
    super(service);
  }
}
