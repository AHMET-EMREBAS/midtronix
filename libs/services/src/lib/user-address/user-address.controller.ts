import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateUserAddressDto,
  UserAddress,
  UpdateUserAddressDto,
} from '@mdtx/database';
import { UserAddressService } from './user-address.service';

const R = RestRouteBuilder.get('UserAddress');

@R.Controler()
export class UserAddressController {
  constructor(protected readonly service: UserAddressService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateUserAddressDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateUserAddressDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToUserAddress(@R.Param() param: RelationDto<UserAddress>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<UserAddress>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<UserAddress>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<UserAddress>) {
    return this.service.unsetRelation(param);
  }
}
