import { IProject, ISprint, ITask } from '@mdtx/common';
import { Entity, OneRelation, Type } from '@mdtx/core';
import { CreateCommonTaskEntity, DescriptionEntity } from './__base';
import { User } from './user';

@Entity()
export class Project extends DescriptionEntity implements IProject {}

@Entity()
export class Sprint extends DescriptionEntity implements ISprint<Project> {
  @OneRelation(Project) project!: Project;
}

@Entity()
export class Task
  extends CreateCommonTaskEntity(User)
  implements ITask<User, Sprint>
{
  @OneRelation(Sprint) sprint!: Sprint;
}
