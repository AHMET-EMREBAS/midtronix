import { QuantityView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuantityViewService extends BaseViewEntityService<QuantityView> {
  constructor(@InjectRepository(QuantityView) repo: Repository<QuantityView>) {
    super(repo);
  }
}
