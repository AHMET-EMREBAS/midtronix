import { AddressView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AddressViewService extends BaseViewEntityService<AddressView> {
  constructor(@InjectRepository(AddressView) repo: Repository<AddressView>) {
    super(repo);
  }
}
