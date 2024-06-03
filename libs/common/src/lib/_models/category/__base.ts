export interface IID {
  id: number;
}

export interface IBaseEntity extends IID {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface IOwner<TOwner extends IID> extends IBaseEntity {
  owner: TOwner;
}

export interface IName extends IBaseEntity {
  name: string;
}

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
