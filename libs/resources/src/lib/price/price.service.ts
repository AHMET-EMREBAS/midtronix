import { Price } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class PriceService extends BaseEntityService<Price> {
  constructor(
    @InjectRepository(Price) repo: Repository<Price>,
    eventEmtiter: EventEmitter2
  ) {
    super(repo, eventEmtiter);
  }
}
