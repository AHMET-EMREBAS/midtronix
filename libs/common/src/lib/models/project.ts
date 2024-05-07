/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IComment, IDescription, IID } from './__base';

export interface IProject extends IDescription {}

export interface ISprint<TProject extends IID> extends IDescription {
  project: TProject;
}

export interface ITask<TUser extends IID> extends IDescription {
  due: Date;
  status: string;
  difficulty: string;
  assignees: TUser[];
}

export interface ITaskComment<TUser extends IID, TTarget extends IID>
  extends IComment<TUser, TTarget> {}

export interface ICreateProjectDto extends Omit<IProject, keyof IBaseEntity> {}
