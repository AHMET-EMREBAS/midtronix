import { Store } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class StoreService extends BaseEntityService<Store> {
  constructor(
    @InjectRepository(Store) repo: Repository<Store>,
    eventEmtiter: EventEmitter2
  ) {
    super(repo, eventEmtiter);
  }
}
