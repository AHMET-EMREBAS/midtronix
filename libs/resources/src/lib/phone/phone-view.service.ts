import { PhoneView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PhoneViewService extends BaseViewEntityService<PhoneView> {
  constructor(@InjectRepository(PhoneView) repo: Repository<PhoneView>) {
    super(repo);
  }
}
