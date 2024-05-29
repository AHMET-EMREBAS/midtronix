import { IDDto } from '../dto';
import { Property } from './property';
import { PropertyOptions } from './types';

export function IDObjectProperty(options?: PropertyOptions) {
  return Property({
    ...options,
    type: 'object',
    objectType: IDDto,
    example: options?.isArray ? [{ id: 1 }] : { id: 1 },
  });
}
