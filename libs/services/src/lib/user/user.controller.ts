import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateUserDto, User, UpdateUserDto } from '@mdtx/database';
import { UserService } from './user.service';

const R = RestRouteBuilder.get('User');

@R.Controler()
export class UserController {
  constructor(protected readonly service: UserService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateUserDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateUserDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToUser(@R.Param() param: RelationDto<User>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<User>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<User>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<User>) {
    return this.service.unsetRelation(param);
  }
}
