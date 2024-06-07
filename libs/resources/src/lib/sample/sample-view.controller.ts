import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { SampleQueryDto, SampleView } from '@mdtx/entities';
import { SampleService } from './sample.service';
import { ApiVersion } from '@mdtx/common';

export const SampleRRB = RestRouteBuilder.get(SampleView.name, ApiVersion.v1);

@SampleRRB.Controler()
export class SampleViewController extends CreateBasicViewController<
  SampleView,
  SampleQueryDto
>(SampleRRB, SampleView, SampleQueryDto) {
  constructor(service: SampleService) {
    super(service);
  }
}
