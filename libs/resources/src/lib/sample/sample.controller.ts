import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  CreateSampleDto,
  QuerySample,
  Sample,
  UdpateSampleDto,
} from '@mdtx/entities';
import { SampleService } from './sample.service';

import { ApiVersion } from '@mdtx/common';

export const SampleRRB = RestRouteBuilder.get('Sample', ApiVersion.v1);

@SampleRRB.Controler()
export class SampleController extends CreateBasicController<
  Sample,
  CreateSampleDto,
  UdpateSampleDto,
  QuerySample
>(SampleRRB, Sample, CreateSampleDto, UdpateSampleDto, QuerySample) {
  constructor(service: SampleService) {
    super(service);
  }
}
