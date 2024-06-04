import { IID } from '@mdtx/common';
import { FindManyOptions, Repository } from 'typeorm';

export class BaseEntityService<T extends IID, CreateDto, UdpateDto, Query> {
  constructor(protected readonly repo: Repository<T>) {}

  findAll(query: Query) {
    return this.repo.find(query);
  }

  save(entity: CreateDto) {
    return this.repo.save(entity);
  }
}
