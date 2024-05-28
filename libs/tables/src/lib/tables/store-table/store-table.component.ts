import { Component } from '@angular/core';
import { StoreViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { StoreViewToolbarComponent } from '../../toolbars';
import {
  STORE_VIEW_COLUMNS,
  STORE_VIEW_DISPLAY_COLUMNS,
  STORE_VIEW_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IStoreViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-store-view-table',
  standalone: true,
  imports: [...TableModules, StoreViewToolbarComponent],
  templateUrl: './store-view-table.component.html',
  styleUrl: './store-view-table.component.scss',
  providers: [StoreViewService],
})
export class StoreViewTableComponent extends BaseTableComponent<IStoreViewRaw> {
  override pageIndex = 0;
  override pageSize = STORE_VIEW_PAGE_SIZE;
  override columns = STORE_VIEW_COLUMNS;
  override displayedColumns = STORE_VIEW_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: StoreViewService, protected readonly router: Router) {
    super(service);
  }
}
