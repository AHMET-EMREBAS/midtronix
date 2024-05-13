import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateStoreDto, Store, UpdateStoreDto } from '@mdtx/database';
import { StoreService } from './store.service';

const R = RestRouteBuilder.get('Store');

@R.Controler()
export class StoreController {
  constructor(protected readonly storeService: StoreService) {}

  @R.SaveOne()
  save(@R.Body() store: CreateStoreDto) {
    return this.storeService.save(store);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.storeService.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.storeService.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.storeService.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateStoreDto) {
    return this.storeService.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToStore(@R.Param() relationDto: RelationDto<Store>) {
    return this.storeService.addRelation(relationDto);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() relationDto: RelationDto<Store>) {
    return this.storeService.removeRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Param() relationDto: RelationDto<Store>) {
    return this.storeService.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() relationDto: UnsetRelationDto<Store>) {
    return this.storeService.unsetRelation(relationDto);
  }
}
