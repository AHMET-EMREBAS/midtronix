import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateUserEmailDto,
  UserEmail,
  UpdateUserEmailDto,
} from '@mdtx/database';
import { UserEmailService } from './user-email.service';

const R = RestRouteBuilder.get('UserEmail');

@R.Controler()
export class UserEmailController {
  constructor(protected readonly service: UserEmailService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateUserEmailDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateUserEmailDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToUserEmail(@R.Param() param: RelationDto<UserEmail>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<UserEmail>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<UserEmail>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<UserEmail>) {
    return this.service.unsetRelation(param);
  }
}
