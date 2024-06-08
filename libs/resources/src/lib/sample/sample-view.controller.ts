import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { SampleQueryDto, SampleView } from '@mdtx/entities';
import { SampleService } from './sample.service';
import { ApiVersion } from '@mdtx/common';

export const SampleViewRRB = RestRouteBuilder.get(SampleView.name, ApiVersion.v1);

@SampleViewRRB.Controler()
export class SampleViewController extends CreateBasicViewController<
  SampleView,
  SampleQueryDto
>(SampleViewRRB, SampleView, SampleQueryDto) {
  constructor(service: SampleService) {
    super(service);
  }
}
