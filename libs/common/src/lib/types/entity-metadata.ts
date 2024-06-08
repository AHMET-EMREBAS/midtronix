/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseEntity, IBaseView } from '../base';
import { KeyOf } from './keysof';
import { PropertyMetadata } from './property-metadata';

export type TableFields<T> = (KeyOf<T> | 'firstColumn' | 'lastColumn')[];
export type CommonMetadata<T> = {
  /**
   * Table column names
   * @returns
   */
  tableColumnNames: () => TableFields<T>;

  /**
   * Table/Form field metadata
   * @returns
   */
  columns: () => PropertyMetadata<T>[];

  /**
   * For search functionality
   * @returns
   */
  propertyNames: () => KeyOf<T>[];
};

export type EntityMetadata<T> = Record<keyof T, () => PropertyMetadata<T>>;

function __date(dateString: string) {
  const date = new Date(dateString);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
export class __BaseEntityMetadata<T extends IBaseEntity | IBaseView>
  implements CommonMetadata<T>
{
  /**
   * For Order/Query Dto Creation
   * @returns
   */
  propertyNames(): KeyOf<T>[] {
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

  tableColumnNames(): TableFields<T> {
    return [
      'firstColumn',
      ...this.sortedColumns().map((e) => {
        return e.name;
      }),
      'lastColumn',
    ];
  }

  columns(): PropertyMetadata<T>[] {
    return [
      this.id(),
      this.createdAt(),
      this.updatedAt(),
      this.deletedAt(),
      this.createdBy(),
      this.updatedBy(),
      this.active(),
    ];
  }

  sortedColumns() {
    return this.columns()
      .map((e) => {
        if (e.order) return e;
        return { ...e, order: 21 };
      })
      .sort((p, c) => {
        if (!p.order || !c.order)
          throw new Error('order property is required!');
        return p.order > c.order ? 1 : p.order < c.order ? -1 : 0;
      });
  }

  createdAt(): PropertyMetadata<T> {
    return {
      name: 'createdAt',
      label: 'Created',
      mapValue(value) {
        if (value) {
          return new Date(value.createdAt).toLocaleDateString();
        }
        return '';
      },
      order: 301,
    };
  }
  updatedAt(): PropertyMetadata<T> {
    return {
      name: 'updatedAt',
      label: 'Updated',
      mapValue(value) {
        return __date(value);
      },
      order: 302,
    };
  }

  deletedAt(): PropertyMetadata<T> {
    return {
      name: 'deletedAt',
      label: 'Deleted',
      mapValue(value) {
        if (value) {
          return new Date(value.deletedAt).toLocaleDateString();
        }
        return '';
      },
      order: 303,
    };
  }

  createdBy(): PropertyMetadata<T> {
    return {
      name: 'createdBy',
      label: 'Creator',
      order: 304,
    };
  }

  updatedBy(): PropertyMetadata<T> {
    return {
      name: 'updatedBy',
      label: 'Updator',
      order: 305,
    };
  }

  active(): PropertyMetadata<T> {
    return {
      name: 'active',
      label: 'Active',
      order: 306,
      type: 'boolean',
      inputType: 'checkbox',
      statusClass(value: any) {
        if (value.active === true) {
          return 'success';
        }
        return 'attention';
      },
    };
  }

  id(): PropertyMetadata<T> {
    return {
      name: 'id',
      label: '#',
      prefixIcon: 'numbers',
      order: 101,
    };
  }

  firstColumn(): PropertyMetadata<any> {
    return {
      name: 'firstColumn',
      label: 'Fist Column',
      order: 100,
    };
  }

  lastColumn(): PropertyMetadata<any> {
    return {
      name: 'lastColumn',
      label: 'Last Column',
      order: 601,
    };
  }
}

export class BaseEntityMetadata<T extends IBaseEntity>
  extends __BaseEntityMetadata<T>
  implements CommonMetadata<T> {}

export class BaseViewMetadata<T extends IBaseView>
  extends __BaseEntityMetadata<T>
  implements CommonMetadata<T> {}

export type ClientEntityMetadata<T extends IBaseEntity> = BaseEntityMetadata<T>;
