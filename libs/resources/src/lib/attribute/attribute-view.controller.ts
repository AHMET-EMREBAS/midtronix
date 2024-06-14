import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { AttributeView, AttributeViewQueryDto } from '@mdtx/entities';
import { AttributeViewService } from './attribute-view.service';
import { ApiVersion } from '@mdtx/common';

export const AttributeViewRRB = RestRouteBuilder.get(
  AttributeView.name,
  ApiVersion.v1
);

@AttributeViewRRB.Controler()
export class AttributeViewController extends CreateBasicViewController<
  AttributeView,
  AttributeViewQueryDto
>(AttributeViewRRB, AttributeView, AttributeViewQueryDto) {
  constructor(service: AttributeViewService) {
    super(service);
  }
}
