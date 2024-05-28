import { Component } from '@angular/core';
import { MessageService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { MessageToolbarComponent } from '../../toolbars';
import {
  MESSAGE_COLUMNS,
  MESSAGE_DISPLAY_COLUMNS,
  MESSAGE_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IMessageRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-message-table',
  standalone: true,
  imports: [...TableModules, MessageToolbarComponent],
  templateUrl: './message-table.component.html',
  styleUrl: './message-table.component.scss',
  providers: [MessageService],
})
export class MessageTableComponent extends BaseTableComponent<IMessageRaw> {
  override pageIndex = 0;
  override pageSize = MESSAGE_PAGE_SIZE;
  override columns = MESSAGE_COLUMNS;
  override displayedColumns = MESSAGE_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: MessageService, protected readonly router: Router) {
    super(service);
  }
}
