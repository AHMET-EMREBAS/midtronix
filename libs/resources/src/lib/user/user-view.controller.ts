import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { UserQueryDto, UserView } from '@mdtx/entities';
import { UserViewService } from './user-view.service';
import { ApiVersion } from '@mdtx/common';

export const UserViewRRB = RestRouteBuilder.get(UserView.name, ApiVersion.v1);

@UserViewRRB.Controler()
export class UserViewController extends CreateBasicViewController<
  UserView,
  UserQueryDto
>(UserViewRRB, UserView, UserQueryDto) {
  constructor(service: UserViewService) {
    super(service);
  }
}
