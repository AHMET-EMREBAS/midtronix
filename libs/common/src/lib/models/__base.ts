import { TableColumnOption } from '../table';

export interface IID {
  id: number;
}

/**
 * Timestamp and id
 */
export interface IBaseEntity extends IID {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export const IBaseEntityTableOption: TableColumnOption<IBaseEntity> = {
  id: { name: 'id', label: '#', order: 0 },
  createdAt: {
    name: 'createdAt',
    label: 'Created',
    value(v) {
      return v ? new Date(v.createdAt).toLocaleDateString() : 'None';
    },
    order: 101,
  },
  deletedAt: {
    name: 'deletedAt',
    label: 'Deleted',
    value(v) {
      return v ? new Date(v.deletedAt).toLocaleDateString() : 'None';
    },
    order: 102,
  },
  updatedAt: {
    name: 'updatedAt',
    label: 'Updated',
    value(v) {
      return v ? new Date(v.updatedAt).toLocaleDateString() : 'None';
    },
    order: 103,
  },
};

export function wrapTableOptions<T extends IBaseEntity>(
  options: TableColumnOption<T>
): TableColumnOption<T> {
  return {
    id: { name: 'id', label: '#', order: 0 },
    ...options,
    createdAt: {
      name: 'createdAt',
      label: 'Created',
      value(v) {
        return v ? new Date(v.createdAt).toLocaleDateString() : 'None';
      },
      order: 101,
    },
    deletedAt: {
      name: 'deletedAt',
      label: 'Deleted',
      value(v) {
        return v ? new Date(v.deletedAt).toLocaleDateString() : 'None';
      },
      order: 102,
    },
    updatedAt: {
      name: 'updatedAt',
      label: 'Updated',
      value(v) {
        return v ? new Date(v.updatedAt).toLocaleDateString() : 'None';
      },
      order: 103,
    },
  };
}

/**
 * Owner and timestamp
 */
export interface IOwner<TOwner extends IID> extends IBaseEntity {
  owner: TOwner;
}

/**
 * Name and timestamp
 */
export interface IName extends IBaseEntity {
  name: string;
}

export const INameTableOption: TableColumnOption<IName> = {
  ...IBaseEntityTableOption,
  name: { name: 'name', order: 10 },
};

/**
 * Name and description and timestamp
 */
export interface IDescription extends IName {
  description?: string;
}

export interface IUrl extends IBaseEntity {
  name: string;
  url: string;
}

export interface ICredential extends IBaseEntity {
  username: string;
  password: string;
}

export interface IComment<TUser extends IID, TTarget extends IID>
  extends IOwner<TUser> {
  comment: string;
  target: TTarget;
}

export interface ILike<TUser extends IID> extends IOwner<TUser> {
  like?: boolean;
}

export interface ICommonTask<TUser extends IID> extends IDescription {
  due?: number;
  startDate?: number;
  finishDate?: number;
  status?: number;
  difficulty?: number;
  assignees?: TUser[];
}
