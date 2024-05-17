/* eslint-disable @typescript-eslint/no-empty-interface */
import { IComment, ICommonTask, IDescription, IID } from './__base';
import { IUser } from './user';

/**
 * @param name
 * @param descripiton
 */
export interface IProject extends IDescription {}

/**
 * @param name
 * @param description
 */
export interface ISprint<TProject extends IID = IID> extends IDescription {
  project: TProject;
}

/**
 * @param name string
 * @param description string
 * @param due string
 * @param status string
 * @param difficulty string
 * @param startDate Date
 * @param finishDate Date
 * @param assignees TUser[]
 */
export interface ITask<TUser extends IID = IID, TSprint extends IID = IID>
  extends ICommonTask<TUser> {
  sprint?: TSprint;
}

export interface ITaskComment<
  TUser extends IID = IID,
  TTarget extends IID = IID
> extends IComment<TUser, TTarget> {}

export type IProjectRaw = IProject;

export type ISprintRaw = ISprint<IProject>;
export type ITaskRaw = ITask<IUser, ISprint>;
export type ITaskCommentRaw = ITaskComment<ITask>;
