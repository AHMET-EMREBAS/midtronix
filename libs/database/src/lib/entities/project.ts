import { IProject, ISprint, ITask } from '@mdtx/common';
import { Column, Entity, OwnerRelation } from '@mdtx/core';
import { DescriptionEntity } from './__base';
import { User } from './user';

@Entity()
export class Project extends DescriptionEntity implements IProject {}

@Entity()
export class Sprint extends DescriptionEntity implements ISprint<Project> {
  @OwnerRelation(Project) project!: Project;
}

@Entity()
export class Task extends DescriptionEntity implements ITask<User> {
  @Column({ type: 'varchar', nullable: true }) due!: Date;
  @Column({ type: 'varchar', nullable: true }) status!: string;
  @Column({ type: 'varchar', nullable: true }) difficulty!: string;
  @OwnerRelation(User) assignees!: User[];
}
