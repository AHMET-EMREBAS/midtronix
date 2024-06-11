import { UserView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserViewService extends BaseViewEntityService<UserView> {
  constructor(@InjectRepository(UserView) repo: Repository<UserView>) {
    super(repo);
  }
}
