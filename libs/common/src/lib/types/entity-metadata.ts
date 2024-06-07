import { IBaseEntity, IBaseView } from '../base';
import { PropertyMetadata } from './property-metadata';

export type CommonMetadata<T> = {
  fields: () => (keyof T)[];
  tableColumns: () => PropertyMetadata<T>[];
  tableDisplayedColumns: () => PropertyMetadata<T>[];
};

export type EntityMetadata<T> = Record<keyof T, () => PropertyMetadata<T>>;

export class BaseEntityMetadata<T extends IBaseEntity>
  implements CommonMetadata<T>
{
  fields(): (keyof T)[] {
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
  tableColumns(): PropertyMetadata<T>[] {
    return [
      this.id(),
      this.createdAt(),
      this.updatedAt(),
      this.deletedAt(),
      this.active(),
    ];
  }

  tableDisplayedColumns(): PropertyMetadata<T>[] {
    return [
      this.id(),
      this.createdAt(),
      this.updatedAt(),
      this.deletedAt(),
      this.active(),
    ];
  }

  createdAt(): PropertyMetadata<T> {
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
  updatedAt(): PropertyMetadata<T> {
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

  deletedAt(): PropertyMetadata<T> {
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

  createdBy(): PropertyMetadata<T> {
    return {
      label: 'Creator',
    };
  }

  updatedBy(): PropertyMetadata<T> {
    return {
      label: 'Updator',
    };
  }

  active(): PropertyMetadata<T> {
    return {
      label: 'Created',
    };
  }

  id(): PropertyMetadata<T> {
    return {
      label: '#',
      prefixIcon: 'numbers',
    };
  }
}

export class BaseViewMetadata<T extends IBaseView>
  implements CommonMetadata<T>
{
  fields(): (keyof T)[] {
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
  tableColumns(): PropertyMetadata<T>[] {
    return [
      this.id(),
      this.createdAt(),
      this.updatedAt(),
      this.deletedAt(),
      this.active(),
    ];
  }

  tableDisplayedColumns(): PropertyMetadata<T>[] {
    return [
      this.id(),
      this.createdAt(),
      this.updatedAt(),
      this.deletedAt(),
      this.active(),
    ];
  }

  createdAt(): PropertyMetadata<T> {
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
  updatedAt(): PropertyMetadata<T> {
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

  deletedAt(): PropertyMetadata<T> {
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

  createdBy(): PropertyMetadata<T> {
    return {
      label: 'Creator',
    };
  }

  updatedBy(): PropertyMetadata<T> {
    return {
      label: 'Updator',
    };
  }

  active(): PropertyMetadata<T> {
    return {
      label: 'Created',
    };
  }

  id(): PropertyMetadata<T> {
    return {
      label: '#',
      prefixIcon: 'numbers',
    };
  }
}
