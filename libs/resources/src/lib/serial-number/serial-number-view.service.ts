import { SerialNumberView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SerialNumberViewService extends BaseViewEntityService<SerialNumberView> {
  constructor(
    @InjectRepository(SerialNumberView) repo: Repository<SerialNumberView>
  ) {
    super(repo);
  }
}
