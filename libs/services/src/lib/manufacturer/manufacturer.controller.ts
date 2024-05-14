import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateManufacturerDto,
  Manufacturer,
  UpdateManufacturerDto,
} from '@mdtx/database';
import { ManufacturerService } from './manufacturer.service';

const R = RestRouteBuilder.get('Manufacturer');

@R.Controler()
export class ManufacturerController {
  constructor(protected readonly service: ManufacturerService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateManufacturerDto) {
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
  updateOneById(
    @R.ParamID() id: number,
    @R.Body() body: UpdateManufacturerDto
  ) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToManufacturer(@R.Param() param: RelationDto<Manufacturer>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Manufacturer>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Manufacturer>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Manufacturer>) {
    return this.service.unsetRelation(param);
  }
}
