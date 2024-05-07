/* eslint-disable @typescript-eslint/no-empty-interface */
import { IComment, IDescription } from './__base';

export interface IProject extends IDescription {}

export interface ISprint<TProject> extends IDescription {
  project: TProject;
}

export interface ITask<TUser> extends IDescription {
  due: Date;
  status: string;
  difficulty: string;
  assignees: TUser[];
}

export interface ITaskComment<TUser, TTarget>
  extends IComment<TUser, TTarget> {}
