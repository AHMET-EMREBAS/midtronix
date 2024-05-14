import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateTaskDto, Task, UpdateTaskDto } from '@mdtx/database';
import { TaskService } from './task.service';

const R = RestRouteBuilder.get('Task');

@R.Controler()
export class TaskController {
  constructor(protected readonly service: TaskService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateTaskDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateTaskDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToTask(@R.Param() param: RelationDto<Task>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Task>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Task>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Task>) {
    return this.service.unsetRelation(param);
  }
}
