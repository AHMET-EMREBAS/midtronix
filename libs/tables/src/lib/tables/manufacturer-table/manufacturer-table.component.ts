import { Component } from '@angular/core';
import { ManufacturerService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { ManufacturerToolbarComponent } from '../../toolbars';
import {
  MANUFACTURER_COLUMNS,
  MANUFACTURER_DISPLAY_COLUMNS,
  MANUFACTURER_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
} from '../../table-options';
import { IManufacturerRaw } from '@mdtx/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mdtx-manufacturer-table',
  standalone: true,
  imports: [...TableModules, ManufacturerToolbarComponent],
  templateUrl: './manufacturer-table.component.html',
  styleUrl: './manufacturer-table.component.scss',
  providers: [ManufacturerService],
})
export class ManufacturerTableComponent extends BaseTableComponent<IManufacturerRaw> {
  override pageIndex = 0;
  override pageSize = MANUFACTURER_PAGE_SIZE;
  override columns = MANUFACTURER_COLUMNS;
  override displayedColumns = MANUFACTURER_DISPLAY_COLUMNS;

  override pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(service: ManufacturerService, protected readonly router: Router) {
    super(service);
  }
}
