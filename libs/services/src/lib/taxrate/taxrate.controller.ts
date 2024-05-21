import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateTaxrateDto, Taxrate, UpdateTaxrateDto } from '@mdtx/database';
import { TaxrateService } from './taxrate.service';

const R = RestRouteBuilder.get('Taxrate');

@R.Controler()
export class TaxrateController {
  constructor(protected readonly service: TaxrateService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateTaxrateDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateTaxrateDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToTaxrate(@R.Param() param: RelationDto<Taxrate>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Taxrate>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Taxrate>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Taxrate>) {
    return this.service.unsetRelation(param);
  }
}
