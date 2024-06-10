import { StoreView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StoreViewService extends BaseViewEntityService<StoreView> {
  constructor(@InjectRepository(StoreView) repo: Repository<StoreView>) {
    super(repo);
  }
}
