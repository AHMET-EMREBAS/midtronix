import { NameEntity } from './__base';
import { ICategory, IDepartment } from '@mdtx/common';
import { Column, Entity } from '@mdtx/core';

@Entity()
export class Category extends NameEntity implements ICategory {}

@Entity()
export class Department extends Category implements IDepartment {}

@Entity()
export class CustomerBadge extends NameEntity {
  @Column({ type: 'int' }) requiredPoints!: number;
}

@Entity()
export class UserBadge extends NameEntity {
  @Column({ type: 'int' }) requiredPoints!: number;
}
