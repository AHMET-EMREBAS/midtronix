import { RoleView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoleViewService extends BaseViewEntityService<RoleView> {
  constructor(@InjectRepository(RoleView) repo: Repository<RoleView>) {
    super(repo);
  }
}
