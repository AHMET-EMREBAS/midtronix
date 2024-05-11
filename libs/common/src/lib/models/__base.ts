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
