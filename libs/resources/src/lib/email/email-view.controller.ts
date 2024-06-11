import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { EmailQueryDto, EmailView } from '@mdtx/entities';
import { EmailViewService } from './email-view.service';
import { ApiVersion } from '@mdtx/common';

export const EmailViewRRB = RestRouteBuilder.get(EmailView.name, ApiVersion.v1);

@EmailViewRRB.Controler()
export class EmailViewController extends CreateBasicViewController<
  EmailView,
  EmailQueryDto
>(EmailViewRRB, EmailView, EmailQueryDto) {
  constructor(service: EmailViewService) {
    super(service);
  }
}
