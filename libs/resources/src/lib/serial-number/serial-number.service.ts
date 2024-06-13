import { SerialNumber } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class SerialNumberService extends BaseEntityService<SerialNumber> {
  constructor(
    @InjectRepository(SerialNumber) repo: Repository<SerialNumber>,
    eventEmtiter: EventEmitter2
  ) {
    super(repo, eventEmtiter);
  }
}
