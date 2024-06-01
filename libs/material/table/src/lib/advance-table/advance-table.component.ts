import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ADVANCE_TABLE_BULK_ACTION_TOKEN,
  ADVANCE_TABLE_COLUMNS_TOKEN,
  ADVANCE_TABLE_ROW_ACTION_TOKEN,
  ADVANCE_TABLE_DATA_SERVICE_TOKEN,
} from './advance-table.providers';
import { IAdvanceTableDataService } from './advance-table-data.service';
import { IID } from '@mdtx/common';
import {
  AdvanceTableBulkAction,
  AdvanceTableRowAction,
} from './advance-table.types';

@Component({
  selector: 'mdtx-advance-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advance-table.component.html',
  styleUrl: './advance-table.component.scss',
})
export class AdvanceTableComponent<T extends IID = IID> {
  constructor(
    @Inject(ADVANCE_TABLE_COLUMNS_TOKEN())
    public readonly columns: string[],
    @Inject(ADVANCE_TABLE_DATA_SERVICE_TOKEN())
    public readonly service: IAdvanceTableDataService<T>,
    @Inject(ADVANCE_TABLE_ROW_ACTION_TOKEN())
    public readonly rowActions: AdvanceTableRowAction[],
    @Inject(ADVANCE_TABLE_BULK_ACTION_TOKEN())
    public readonly bulkActions: AdvanceTableBulkAction[]
  ) {
    console.log(columns);
  }
}
