import { ManufacturerView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ManufacturerViewService extends BaseViewEntityService<ManufacturerView> {
  constructor(
    @InjectRepository(ManufacturerView) repo: Repository<ManufacturerView>
  ) {
    super(repo);
  }
}
