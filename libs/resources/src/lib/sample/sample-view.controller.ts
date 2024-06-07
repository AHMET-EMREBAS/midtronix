import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { QuerySample, SampleView } from '@mdtx/entities';
import { SampleService } from './sample.service';

import { ApiVersion } from '@mdtx/common';

export const SampleRRB = RestRouteBuilder.get(SampleView.name, ApiVersion.v1);

@SampleRRB.Controler()
export class SampleViewController extends CreateBasicViewController<
  SampleView,
  QuerySample
>(SampleRRB, SampleView, QuerySample) {
  constructor(service: SampleService) {
    super(service);
  }
}
