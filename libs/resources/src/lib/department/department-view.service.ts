import { DepartmentView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentViewService extends BaseViewEntityService<DepartmentView> {
  constructor(
    @InjectRepository(DepartmentView) repo: Repository<DepartmentView>
  ) {
    super(repo);
  }
}
