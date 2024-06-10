import { ProductView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductViewService extends BaseViewEntityService<ProductView> {
  constructor(@InjectRepository(ProductView) repo: Repository<ProductView>) {
    super(repo);
  }
}
