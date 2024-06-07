import { SampleView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SampleViewService extends BaseViewEntityService<SampleView> {
  constructor(@InjectRepository(SampleView) repo: Repository<SampleView>) {
    super(repo);
  }
}
