import { Department } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class DepartmentService extends BaseEntityService<Department> {
  constructor(
    @InjectRepository(Department) repo: Repository<Department>,
    eventEmtiter: EventEmitter2
  ) {
    super(repo, eventEmtiter);
  }
}
