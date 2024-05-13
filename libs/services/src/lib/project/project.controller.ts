import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateProjectDto, Project, UpdateProjectDto } from '@mdtx/database';
import { ProjectService } from './project.service';

const R = RestRouteBuilder.get('Project');

@R.Controler()
export class ProjectController {
  constructor(protected readonly service: ProjectService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateProjectDto) {
    return this.service.save(body);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.service.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.service.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.service.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateProjectDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToProject(@R.Param() param: RelationDto<Project>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Project>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Project>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Project>) {
    return this.service.unsetRelation(param);
  }
}
