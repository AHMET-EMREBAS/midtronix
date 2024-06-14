import { SkuView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SkuViewService extends BaseViewEntityService<SkuView> {
  constructor(@InjectRepository(SkuView) repo: Repository<SkuView>) {
    super(repo);
  }
}
