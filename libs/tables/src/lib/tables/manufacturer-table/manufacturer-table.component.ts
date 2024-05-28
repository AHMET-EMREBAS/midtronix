import { Component } from '@angular/core';
import { ManufacturerViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ManufacturerViewToolbarComponent } from '../../toolbars';
import {
  MANUFACTURER_COLUMNS,
  MANUFACTURER_DISPLAY_COLUMNS,
  MANUFACTURER_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IManufacturerViewRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-manufacturer-view-table',
  standalone: true,
  imports: [...TableModules, ManufacturerViewToolbarComponent],
  templateUrl: './manufacturer-view-table.component.html',
  styleUrl: './manufacturer-view-table.component.scss',
  providers: [ManufacturerViewService],
})
export class ManufacturerViewTableComponent extends BaseTableComponent<IManufacturerViewRaw> {
  override pageIndex = 0;
  override pageSize = MANUFACTURER_PAGE_SIZE;
  override columns = MANUFACTURER_COLUMNS;
  override displayedColumns = MANUFACTURER_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    service: ManufacturerViewService,
    protected readonly router: Router
  ) {
    super(service);
  }
}
