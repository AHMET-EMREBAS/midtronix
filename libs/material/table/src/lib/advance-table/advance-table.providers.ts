import { createClassProvider, createValueProvider } from '@mdtx/material/core';
import {
  AdvanceTableBulkAction,
  AdvanceTableRowAction,
} from './advance-table.types';
import { IAdvanceTableDataService } from './advance-table-data.service';
import { IID } from '@mdtx/common';

export const {
  provide: provideAdvanceTableColumns,
  token: ADVANCE_TABLE_COLUMNS_TOKEN,
} = createValueProvider<string[]>('AdvanceTableColumns');

export const {
  provide: provideAdvanceTableRowActions,
  token: ADVANCE_TABLE_ROW_ACTION_TOKEN,
} = createValueProvider<AdvanceTableRowAction[]>('AdvanceTableRowAction');

export const {
  provide: provideAdvanceTableBulkActions,
  token: ADVANCE_TABLE_BULK_ACTION_TOKEN,
} = createValueProvider<AdvanceTableBulkAction[]>('AdvanceTableBulkAction');

export const {
  provide: provideAdvanceTableDataService,
  token: ADVANCE_TABLE_DATA_SERVICE_TOKEN,
} = (<T extends IID>() =>
  createClassProvider<IAdvanceTableDataService<T>>(
    'AdvanceTableDataService'
  ))();
