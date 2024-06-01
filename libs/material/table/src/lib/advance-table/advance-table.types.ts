import { IID } from '@mdtx/common';

export type AdvanceTableRowAction<T> = {
  id: number;
  label: string;
  icon: string;
  onClick: (item: T) => void;
};

export type AdvanceTableBulkAction<T> = {
  id: number;
  label: string;
  icon: string;
  onClick: (items: T[]) => void;
};

export type AdvanceTableColumn<T> = {
  name: keyof T;
  label?: string;
  prefix?: string;
  suffix?: string;
  displayLabel?: (value: T) => string;
  displayValue?: (value: T) => string;
  onClick?: (value: T) => void;
};

export type AdvanceTableOptions<T extends IID> = {
  columns: AdvanceTableColumn<T>[];
  displayColumns: AdvanceTableColumn<T>[];
  rowActions: AdvanceTableRowAction<T>[];
  bulkActions: AdvanceTableBulkAction<T>[];
};
