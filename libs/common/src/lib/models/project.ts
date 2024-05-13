/* eslint-disable @typescript-eslint/no-empty-interface */
import { IComment, ICommonTask, IDescription, IID } from './__base';

/**
 * @param name
 * @param descripiton
 */
export interface IProject extends IDescription {}

/**
 * @param name
 * @param description
 */
export interface ISprint<TProject extends IID> extends IDescription {
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
export interface ITask<TUser extends IID, TSprint extends IID>
  extends ICommonTask<TUser> {
  sprint?: TSprint;
}

export interface ITaskComment<TUser extends IID, TTarget extends IID>
  extends IComment<TUser, TTarget> {}
