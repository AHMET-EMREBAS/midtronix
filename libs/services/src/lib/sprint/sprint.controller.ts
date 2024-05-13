import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateSprintDto, Sprint, UpdateSprintDto } from '@mdtx/database';
import { SprintService } from './sprint.service';

const R = RestRouteBuilder.get('Sprint');

@R.Controler()
export class SprintController {
  constructor(protected readonly service: SprintService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateSprintDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateSprintDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToSprint(@R.Param() param: RelationDto<Sprint>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Sprint>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Sprint>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Sprint>) {
    return this.service.unsetRelation(param);
  }
}
