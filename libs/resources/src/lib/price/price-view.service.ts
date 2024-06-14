import { PriceView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PriceViewService extends BaseViewEntityService<PriceView> {
  constructor(@InjectRepository(PriceView) repo: Repository<PriceView>) {
    super(repo);
  }
}
