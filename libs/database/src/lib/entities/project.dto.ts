import {
  ICreateProjectDto,
  ICreateSprintDto,
  ICreateTaskDto,
  IID,
} from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType } from '@mdtx/core';
import { CreateCommonTaskDto, CreateDescriptionDto } from './__base.dto';

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
export class UpdateSprintDto extends PartialType(CreateSprintDto) {}

@Exclude()
export class CreateTaskDto
  extends CreateCommonTaskDto
  implements ICreateTaskDto
{
  @IDObjectProperty() sprint!: IID;
}

@Exclude()
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
