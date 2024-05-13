import { IProject, ISprint, ITask } from '@mdtx/common';
import { Column, Entity, OwnerRelation, Type } from '@mdtx/core';
import { CreateCommonTaskEntity, DescriptionEntity } from './__base';
import { User, UserEntities } from './user';

@Entity()
export class Project extends DescriptionEntity implements IProject {}

@Entity()
export class Sprint extends DescriptionEntity implements ISprint<Project> {
  @OwnerRelation(Project) project!: Project;
}

@Entity()
export class Task
  extends CreateCommonTaskEntity(User)
  implements ITask<User, Sprint>
{
  @OwnerRelation(Sprint) sprint!: Sprint;
}

export const ProjectEntities: Readonly<Type[]> = [Project];
export const SprintEntities: Readonly<Type[]> = [Project, Sprint];
export const TaskEntities: Readonly<Type[]> = [
  Project,
  Sprint,
  Task,
  ...UserEntities,
];
