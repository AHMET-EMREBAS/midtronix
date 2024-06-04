import { RelationDto, RestRouteBuilder, UnsetRelationDto } from '@mdtx/core';
import { SampleService } from './sample.service';
import { CreateSampleDto, QuerySample } from '@mdtx/entities';

const R = RestRouteBuilder.get('Sample');

@R.Controler()
export class SampleController {
  constructor(protected readonly service: SampleService) {}

  @R.FindAll()
  findAll(@R.Query() query: QuerySample) {
    return this.service.findAll(query);
  }

  @R.SaveOne()
  saveOne(@R.Body() entity: CreateSampleDto) {
    return this.service.saveOne(entity);
  }

  @R.UpdateOne()
  updateOne(@R.ParamID() id: number, @R.Body() entity: CreateSampleDto) {
    return this.service.updateOne(id, entity);
  }

  @R.DeleteOne()
  deleteOne(@R.ParamID() id: number) {
    return this.service.deleteOneById(id);
  }

  @R.AddRelation()
  addRelation(@R.Body() relationDto: RelationDto) {
    return this.service.addRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Body() relationDto: RelationDto) {
    return this.service.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Body() relationDto: UnsetRelationDto) {
    return this.service.unsetRelation(relationDto);
  }
}
