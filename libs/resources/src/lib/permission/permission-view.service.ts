import { PermissionView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionViewService extends BaseViewEntityService<PermissionView> {
  constructor(
    @InjectRepository(PermissionView) repo: Repository<PermissionView>
  ) {
    super(repo);
  }
}
