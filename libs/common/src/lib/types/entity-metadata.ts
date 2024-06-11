/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseEntity, IBaseView } from '../base';
import { KeyOf } from './keysof';
import { PropertyMetadata } from './property-metadata';
import { ValidatorBuilder } from './validators';

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
      'notes',
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
      this.notes(),
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
        return __date(value.updatedAt + '');
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
          return __date(value.deletedAt + '');
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
      control: ['', new ValidatorBuilder('active').build()],
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

  name(): PropertyMetadata<T> {
    return {
      name: 'name' as KeyOf<T>,
      label: 'Name',
      type: 'string',
      inputType: 'text',
      required: true,
      minlength: 3,
      maxlength: 50,
      order: 201,
    };
  }

  description(): PropertyMetadata<T> {
    return {
      name: 'description' as KeyOf<T>,
      label: 'Description',
      type: 'string',
      inputType: 'textarea',
      prefixIcon: 'description',
      maxlength: 400,
      order: 202,
    };
  }
  
  notes(): PropertyMetadata<T> {
    return {
      name: 'notes',
      label: 'Notes',
      order: 307,
      type: 'string',
      inputType: 'textarea',
      control: ['', new ValidatorBuilder('notes').maxLength(400).build()],
    };
  }

  user(): PropertyMetadata<T> {
    return {
      name: 'user' as KeyOf<T>,
      label: 'user',
      type: 'string',
      inputType: 'select-one-entity',
      prefixIcon: 'person',
      order: 201,
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

  protected formFields(): PropertyMetadata<any>[] {
    return [this.notes(), this.active()];
  }

  formFieldsWithController() {
    return this.formFields().map((e) => {
      const builder = new ValidatorBuilder(e.name);

      if (e.min != undefined) builder.min(e.min);
      if (e.max != undefined) builder.max(e.max);
      if (e.minlength != undefined) builder.minLength(e.minlength);
      if (e.maxlength != undefined) builder.maxLength(e.maxlength);

      if (e.format == 'email') builder.email();
      else if (e.format == 'barcode') builder.maxLength(13).minLength(8);
      else if (e.format == 'name') builder.maxLength(50).minLength(3);
      else if (e.format == 'password') builder.password();
      else if (e.format == 'phone') builder.phone();

      return {
        ...e,
        control: [null, builder.build()],
      };
    });
  }
}

export class BaseEntityMetadata<T extends IBaseEntity>
  extends __BaseEntityMetadata<T>
  implements CommonMetadata<T> {}

export class BaseViewMetadata<T extends IBaseView>
  extends __BaseEntityMetadata<T>
  implements CommonMetadata<T> {}

export type ClientEntityMetadata<T extends IBaseEntity> = BaseEntityMetadata<T>;
