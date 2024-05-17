/* eslint-disable @typescript-eslint/no-explicit-any */
export type RowOption<T> = {
  name: [keyof T];
  label?: string;
  map?: (t: T) => string;
  prefix?: string;
  suffix?: string;
  transform?: (value: any) => any;
};
