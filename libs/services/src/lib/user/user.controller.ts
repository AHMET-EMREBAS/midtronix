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
  constructor(protected readonly userService: UserService) {}

  @R.SaveOne()
  save(@R.Body() user: CreateUserDto) {
    return this.userService.save(user);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.userService.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.userService.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.userService.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateUserDto) {
    return this.userService.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToUser(@R.Param() relationDto: RelationDto<User>) {
    return this.userService.addRelation(relationDto);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() relationDto: RelationDto<User>) {
    return this.userService.removeRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Param() relationDto: RelationDto<User>) {
    return this.userService.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() relationDto: UnsetRelationDto<User>) {
    return this.userService.unsetRelation(relationDto);
  }
}
