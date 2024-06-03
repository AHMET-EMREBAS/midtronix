import { ICategory } from '../models';
import { EntityMetadata } from './__common';
import { CreateMetadata } from './__base';

export const CategoryMeta: EntityMetadata<ICategory> = CreateMetadata({
  properties: {
    name: {
      type: 'string',
      label: 'Category',
      prefixIcon: 'category',
      validators: {
        minLength: 1,
        maxLength: 30,
        required: true,
      },
    },
  },
});
