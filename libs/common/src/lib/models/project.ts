/* eslint-disable @typescript-eslint/no-empty-interface */
import { IComment, IDescription, IID } from './__base';

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
 * @param name
 * @param description
 * @param due
 * @param status
 * @param difficulty
 * @param assignees
 */
export interface ITask<TUser extends IID, TSprint extends IID>
  extends IDescription {
  due: Date;
  status: string;
  difficulty: string;
  sprint: TSprint;
  assignees: TUser[];
}

export interface ITaskComment<TUser extends IID, TTarget extends IID>
  extends IComment<TUser, TTarget> {}
