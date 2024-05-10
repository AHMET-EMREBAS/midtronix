import { Color } from './color';
import { Icon } from './icons';

export type NavlistItem = {
  label?: string;
  route?: string;
  icon?: Icon;
  color?: Color;
  handler?: (...args: any) => void;
  divider?: boolean;
};

export type Navlist = NavlistItem[];
