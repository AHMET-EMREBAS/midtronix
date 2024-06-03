import { IBaseEntity, IID } from '../models';
import { EntityMetadata, __EntityPropertyMetadata } from './__common';

export const IdPropertyMeta: __EntityPropertyMetadata<IID> = {};

export const IDEntityMeta: EntityMetadata<IID> = {
  properties: {
    id: { label: '#', prefixIcon: 'id' },
  },
};

export const TimestampEntityMeta: EntityMetadata<Omit<IBaseEntity, 'id'>> = {
  properties: {
    createdAt: {
      label: 'Created',
      value(value) {
        return value.createdAt
          ? new Date(value.createdAt).toLocaleDateString()
          : '';
      },
      create: false,
      update: false,
    },
    updatedAt: {
      label: 'Updated',
      value(value) {
        return value.updatedAt
          ? new Date(value.updatedAt).toLocaleDateString()
          : '';
      },
      create: false,
      update: false,
    },
    deletedAt: {
      label: 'Deleted',
      value(value) {
        return value.deletedAt
          ? new Date(value.deletedAt).toLocaleDateString()
          : '';
      },
      create: false,
      update: false,
    },
  },
};

export function CreateMetadata<T>(
  metadata: EntityMetadata<Omit<T, keyof IBaseEntity>>
): EntityMetadata<T> {
  return {
    properties: {
      ...IDEntityMeta.properties,
      ...metadata.properties,
      ...TimestampEntityMeta.properties,
    },
  } as EntityMetadata<T>;
}
