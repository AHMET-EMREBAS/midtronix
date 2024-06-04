import { RestRouteBuilder } from '@mdtx/core';
import { SampleService } from './sample.service';
import { QuerySample } from '@mdtx/entities';

const R = RestRouteBuilder.get('Sample');

@R.Controler()
export class SampleController {
  constructor(protected readonly service: SampleService) {}

  @R.FindAll()
  findAll(@R.Query() query: QuerySample) {
    return this.service.findAll(query);
  }
}
