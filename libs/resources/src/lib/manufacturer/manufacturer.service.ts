import { Manufacturer } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class ManufacturerService extends BaseEntityService<Manufacturer> {
  constructor(
    @InjectRepository(Manufacturer) repo: Repository<Manufacturer>,
    eventEmtiter: EventEmitter2
  ) {
    super(repo, eventEmtiter);
  }
}
