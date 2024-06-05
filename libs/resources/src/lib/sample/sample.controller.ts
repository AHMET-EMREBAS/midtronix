import {
  AdvanceLogger,
  BasicController,
  CreateBasicController,
  RelationDto,
  RestRouteBuilder,
  UnsetRelationDto,
} from '@mdtx/core';
import { SampleService } from './sample.service';
import {
  CreateSampleDto,
  QuerySample,
  Sample,
  UdpateSampleDto,
} from '@mdtx/entities';
import { ISample } from '@mdtx/models';

// const R = RestRouteBuilder.get('Sample');

// @R.Controler()
// export class SampleController extends BasicController<
//   Sample,
//   CreateSampleDto,
//   UdpateSampleDto,
//   QuerySample
// > {
//   constructor(service: SampleService) {
//     super(service);
//   }

//   @R.FindAll()
//   findAll(@R.Query() query: QuerySample) {
//     return this.service.findAll(query);
//   }

//   @R.FindOneById()
//   findOneById(@R.ParamID() id: number) {
//     return this.service.findOneById(id);
//   }

//   @R.SaveOne()
//   saveOne(@R.Body() entity: CreateSampleDto) {
//     return this.service.saveOne(entity);
//   }

//   @R.UpdateOne()
//   updateOne(@R.ParamID() id: number, @R.Body() entity: CreateSampleDto) {
//     return this.service.updateOne(id, entity);
//   }

//   @R.DeleteOne()
//   deleteOne(@R.ParamID() id: number) {
//     return this.service.deleteOneById(id);
//   }

//   @R.AddRelation()
//   addRelation(@R.Body() relationDto: RelationDto) {
//     return this.service.addRelation(relationDto);
//   }

//   @R.SetRelation()
//   setRelation(@R.Body() relationDto: RelationDto) {
//     return this.service.setRelation(relationDto);
//   }

//   @R.UnsetRelation()
//   unsetRelation(@R.Body() relationDto: UnsetRelationDto) {
//     return this.service.unsetRelation(relationDto);
//   }
// }


export class SampleControler extends CreateBasicController<ISample, CreateSampleDto, UdpateSampleDto, QuerySample>("Sample", CreateSampleDto, UdpateSampleDto, QuerySample);