import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  CreateSampleDto,
  SampleQueryDto,
  Sample,
  UdpateSampleDto,
} from '@mdtx/entities';
import { SampleService } from './sample.service';

import { ApiVersion } from '@mdtx/common';

export const SampleRRB = RestRouteBuilder.get(Sample.name, ApiVersion.v1);

@SampleRRB.Controler()
export class SampleController extends CreateBasicController<
  Sample,
  CreateSampleDto,
  UdpateSampleDto,
  SampleQueryDto
>(SampleRRB, Sample, CreateSampleDto, UdpateSampleDto, SampleQueryDto) {
  constructor(service: SampleService) {
    super(service);
  }
}
