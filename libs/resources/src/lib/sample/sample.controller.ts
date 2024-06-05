import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  CreateSampleDto,
  QuerySample,
  Sample,
  UdpateSampleDto,
} from '@mdtx/entities';
import { SampleService } from './sample.service';

export const SampleRRB = RestRouteBuilder.get('Sample');

@SampleRRB.Controler()
export class SampleController extends CreateBasicController<
  Sample,
  CreateSampleDto,
  UdpateSampleDto,
  QuerySample
>(SampleRRB, CreateSampleDto, UdpateSampleDto, QuerySample) {
  constructor(service: SampleService) {
    super(service);
  }
}
