import {
  ICreateProjectDto,
  ICreateSprintDto,
  ICreateTaskDto,
  IID,
} from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';
import { CreateDescriptionDto } from './__base.dto';

@Exclude()
export class CreateProjectDto
  extends CreateDescriptionDto
  implements ICreateProjectDto {}

@Exclude()
export class UpdateProjectDto extends PartialType(CreateProjectDto) {}

@Exclude()
export class CreateSprintDto
  extends CreateDescriptionDto
  implements ICreateSprintDto
{
  @IDObjectProperty({ required: true }) project!: IID;
}

@Exclude()
export class CreateTaskDto
  extends CreateDescriptionDto
  implements ICreateTaskDto
{
  @Property({ type: 'date' }) due!: Date;
  @Property({ type: 'string' }) status!: string;
  @Property({ type: 'string' }) difficulty!: string;
  @IDObjectProperty({ isArray: true }) assignees!: IID[];
}

@Exclude()
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
