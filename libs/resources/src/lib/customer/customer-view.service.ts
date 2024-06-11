import { CustomerView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerViewService extends BaseViewEntityService<CustomerView> {
  constructor(@InjectRepository(CustomerView) repo: Repository<CustomerView>) {
    super(repo);
  }
}
