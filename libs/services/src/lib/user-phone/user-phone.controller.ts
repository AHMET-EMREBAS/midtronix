import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateUserPhoneDto,
  UserPhone,
  UpdateUserPhoneDto,
} from '@mdtx/database';
import { UserPhoneService } from './user-phone.service';

const R = RestRouteBuilder.get('UserPhone');

@R.Controler()
export class UserPhoneController {
  constructor(protected readonly service: UserPhoneService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateUserPhoneDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateUserPhoneDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToUserPhone(@R.Param() param: RelationDto<UserPhone>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<UserPhone>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<UserPhone>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<UserPhone>) {
    return this.service.unsetRelation(param);
  }
}
