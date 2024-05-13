/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import { IProject, ISprint, ITask, ITaskComment } from './project';

export interface ICreateProjectDto extends Omit<IProject, keyof IBaseEntity> {}

export interface ICreateProjectDto extends Omit<IProject, keyof IBaseEntity> {}

export interface ICreateSprintDto
  extends Omit<ISprint<IID>, keyof IBaseEntity> {}

export interface ICreateTaskDto extends Omit<ITask<IID, IID>, keyof IBaseEntity> {}

export interface ICreateTaskCommentDto
  extends Omit<ITaskComment<IID, IID>, keyof IBaseEntity> {}
