import { PriceLevelView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PriceLevelViewService extends BaseViewEntityService<PriceLevelView> {
  constructor(
    @InjectRepository(PriceLevelView) repo: Repository<PriceLevelView>
  ) {
    super(repo);
  }
}
