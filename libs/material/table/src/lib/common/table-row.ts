/* eslint-disable @typescript-eslint/no-explicit-any */
export type TableRow<T extends Record<string, any>> = {
  name: keyof T;
  label?: string;
  map?: (t: T) => string;
  prefix?: string;
  suffix?: string;
  transform?: (value: any) => any;
};
