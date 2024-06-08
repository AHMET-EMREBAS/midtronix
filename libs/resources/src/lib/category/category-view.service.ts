import { CategoryView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryViewService extends BaseViewEntityService<CategoryView> {
  constructor(@InjectRepository(CategoryView) repo: Repository<CategoryView>) {
    super(repo);
  }
}
