import { Component } from '@angular/core';
import { SkuViewService } from '@mdtx/ngrx';
import { BaseTableComponent, TableModules } from '../../__base';
import { SkuViewToolbarComponent } from '../../toolbars';
import { ISkuView, ISkuViewRaw, SkuViewTableOption } from '@mdtx/common';
import { Router } from '@angular/router';
import {
  provideAdvanceTableDataService,
  provideAdvanceTableOptions,
} from '@mdtx/material/table';

@Component({
  selector: 'mdtx-sku-view-table',
  standalone: true,
  imports: [...TableModules, SkuViewToolbarComponent],
  templateUrl: './sku-view-table.component.html',
  styleUrl: './sku-view-table.component.scss',
  providers: [
    SkuViewService,
    provideAdvanceTableOptions<ISkuView>({ ...SkuViewTableOption }),
    provideAdvanceTableDataService(SkuViewService),
  ],
})
export class SkuViewTableComponent extends BaseTableComponent<ISkuViewRaw> {
  constructor(service: SkuViewService, protected readonly router: Router) {
    super(service);
  }
}
