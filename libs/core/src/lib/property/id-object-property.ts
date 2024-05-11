import { IDDto } from '../dto';
import { Property } from './property';
import { PropertyOptions } from './types';

export function IDObjectProperty(options?: PropertyOptions) {
  return Property({ ...options, type: 'object', objectType: IDDto });
}
