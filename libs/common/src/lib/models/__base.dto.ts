/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  IBaseEntity,
  IComment,
  ICredential,
  IDescription,
  IID,
  ILike,
  IName,
  IOwner,
  IUrl,
} from './__base';

export interface ICreateOwnerDto extends Omit<IOwner<IID>, keyof IBaseEntity> {}

export interface ICreateNameDto extends Omit<IName, keyof IBaseEntity> {}

export interface ICreateDescriptionDto
  extends Omit<IDescription, keyof IBaseEntity> {}

export interface ICreateUrlDto extends Omit<IUrl, keyof IBaseEntity> {}

export interface ICreateCredentialDto
  extends Omit<ICredential, keyof IBaseEntity> {}

export interface ICreateCommentDto
  extends Omit<IComment<IID, IID>, keyof IBaseEntity> {}

export interface ICreateLikeDto extends Omit<ILike<IID>, keyof IBaseEntity> {}
