import { SupplierView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierViewService extends BaseViewEntityService<SupplierView> {
  constructor(@InjectRepository(SupplierView) repo: Repository<SupplierView>) {
    super(repo);
  }
}
