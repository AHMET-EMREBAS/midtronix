import { NameEntity } from './__base';
import { ICategory, IDepartment } from '@mdtx/common';
import { Entity } from '@mdtx/core';

@Entity()
export class Category extends NameEntity implements ICategory {}

@Entity()
export class Department extends Category implements IDepartment {}

export const CategoryEntities = [Category];

export const DepartmentEntities = [Department];
