/* eslint-disable @typescript-eslint/no-explicit-any */

export type TableRow<T extends { [key: string]: any }> = {
  name: string;
  label?: string;
  map?: (t: T) => any;
  prefix?: string;
  suffix?: string;
  transform?: (value: any) => any;
};
