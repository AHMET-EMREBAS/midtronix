/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResourceMetadata<T = Record<string, any>> {
  count: number;
  columns: (keyof T)[];
  relations?: (keyof T)[];
  uniques?: (keyof T)[];
  nullables?: (keyof T)[];
}
