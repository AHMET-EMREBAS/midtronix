import { IBaseEntity } from '../base';
import { AllPropertyType } from './all-property-type';
import { PropertyMetadata } from './property-metadata';

export type EntityMetadata<T> = AllPropertyType<
  Omit<T, keyof IBaseEntity>,
  () => PropertyMetadata<T>
> & {
  fields: () => (keyof T)[];
  tableColumns: () => (keyof T)[];
  tableDisplayedColumns: () => (keyof T)[];
};

export class __BaseEntityMetadata implements EntityMetadata<IBaseEntity> {
  fields(): (keyof IBaseEntity)[] {
    return [
      'id',
      'active',
      'createdAt',
      'updatedAt',
      'deletedAt',
      'createdBy',
      'updatedBy',
    ];
  }
  tableColumns(): (keyof IBaseEntity)[] {
    return [
      'id',
      'active',
      'createdAt',
      'updatedAt',
      'deletedAt',
      'createdBy',
      'updatedBy',
    ];
  }

  tableDisplayedColumns(): (keyof IBaseEntity)[] {
    return [
      'id',
      'active',
      'createdAt',
      'updatedAt',
      'deletedAt',
      'createdBy',
      'updatedBy',
    ];
  }

  createdAt(): PropertyMetadata<IBaseEntity> {
    return {
      label: 'Created',
      mapValue(value) {
        if (value) {
          return new Date(value.createdAt).toLocaleDateString();
        }
        return '';
      },
    };
  }
  updatedAt(): PropertyMetadata<IBaseEntity> {
    return {
      label: 'Updated',
      mapValue(value) {
        if (value) {
          return new Date(value.updatedAt).toLocaleDateString();
        }
        return '';
      },
    };
  }
  deletedAt(): PropertyMetadata<IBaseEntity> {
    return {
      label: 'Deleted',
      mapValue(value) {
        if (value) {
          return new Date(value.deletedAt).toLocaleDateString();
        }
        return '';
      },
    };
  }

  createdBy(): PropertyMetadata<IBaseEntity> {
    return {
      label: 'Creator',
    };
  }

  updatedBy(): PropertyMetadata<IBaseEntity> {
    return {
      label: 'Updator',
    };
  }
  active(): PropertyMetadata<IBaseEntity> {
    return {
      label: 'Created',
    };
  }

  id(): PropertyMetadata<IBaseEntity> {
    return {
      label: '#',
    };
  }
}

export const BaseEntityMetadata = new __BaseEntityMetadata();
