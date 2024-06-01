import { IID } from '@mdtx/common';
import { IAdvanceTableDataService } from './advance-table-data.service';
import {
  AdvanceTableBulkAction,
  AdvanceTableColumn,
  AdvanceTableOptions,
  AdvanceTableRowAction,
} from './advance-table.types';
import { InjectionToken, Provider, Type } from '@angular/core';

export const ADVANCE_TABLE_COLUMNS_TOKEN = new InjectionToken(
  'ADVANCE_TABLE_COLUMNS_TOKEN'
);

export function provideAdvanceTableColumns<T>(
  useValue: AdvanceTableColumn<T>[]
): Provider {
  return {
    provide: ADVANCE_TABLE_COLUMNS_TOKEN,
    useValue,
  };
}

export const ADVANCE_TABLE_ROW_ACTIONS_TOKEN = new InjectionToken(
  'ADVANCE_TABLE_ROW_ACTIONS_TOKEN'
);

export function provideAdvanceTableRowActions<T>(
  useValue: AdvanceTableRowAction<T>[]
): Provider {
  return {
    provide: ADVANCE_TABLE_ROW_ACTIONS_TOKEN,
    useValue,
  };
}

export const ADVANCE_TABLE_BULK_ACTIONS_TOKEN = new InjectionToken(
  'ADVANCE_TABLE_BULK_ACTIONS_TOKEN'
);

export function provideAdvanceTableBulkActions<T>(
  useValue: AdvanceTableBulkAction<T>[]
): Provider {
  return {
    provide: ADVANCE_TABLE_BULK_ACTIONS_TOKEN,
    useValue,
  };
}

export const ADVANCE_TABLE_DATA_SERVICE_TOKEN = new InjectionToken(
  'ADVANCE_TABLE_DATA_SERVICE_TOKEN'
);

export function provideAdvanceTableDataService<T extends IID>(
  useClass: Type<IAdvanceTableDataService<T>>
): Provider {
  return {
    provide: ADVANCE_TABLE_DATA_SERVICE_TOKEN,
    useClass,
  };
}

export const ADVANCE_TABLE_OPTIONS_TOKEN = new InjectionToken(
  'ADVANCE_TABLE_OPTIONS_TOKEN'
);

export function provideAdvanceTableOptions<T extends IID>(
  useValue: AdvanceTableOptions<T>
): Provider {
  return {
    provide: ADVANCE_TABLE_OPTIONS_TOKEN,
    useValue,
  };
}
