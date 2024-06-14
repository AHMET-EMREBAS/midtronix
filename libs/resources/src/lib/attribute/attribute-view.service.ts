import { AttributeView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AttributeViewService extends BaseViewEntityService<AttributeView> {
  constructor(
    @InjectRepository(AttributeView) repo: Repository<AttributeView>
  ) {
    super(repo);
  }
}
