import { EntityMetadata, IID } from '@mdtx/common';

import {
  AdvanceTableBulkAction,
  AdvanceTableRowAction,
} from './advance-table.types';
import { InjectionToken, Provider, Type } from '@angular/core';
import { EntityCollectionServiceBase } from '@ngrx/data';
import { SampleMetadata } from '@mdtx/models';
export const ADVANCE_TABLE_COLUMNS_TOKEN = new InjectionToken(
  'ADVANCE_TABLE_COLUMNS_TOKEN'
);

SampleMetadata;
export function provideAdvanceTableColumns<T>(
  useValue: EntityMetadata<T>
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
  useClass: Type<EntityCollectionServiceBase<T>>
): Provider {
  return {
    provide: ADVANCE_TABLE_DATA_SERVICE_TOKEN,
    useClass,
  };
}

export const ADVANCE_TABLE_METADATA_TOKEN = new InjectionToken(
  'ADVANCE_TABLE_METADATA_TOKEN'
);

export function provideAdvanceTableMetadata<T>(
  useValue: EntityMetadata<T>
): Provider {
  return {
    provide: ADVANCE_TABLE_METADATA_TOKEN,
    useValue,
  };
}
