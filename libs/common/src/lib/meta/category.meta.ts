import { ICategory } from '../models';
import { EntityMetadata } from './__common';
import { IDEntityMeta, TimestampEntityMeta } from './__base';

export const CategoryMeta: EntityMetadata<ICategory> = {
  properties: {
    ...IDEntityMeta.properties,
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
    ...TimestampEntityMeta.properties,
  },
};


