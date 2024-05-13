import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Manufacturer } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManufacturerService extends RepositoryService<Manufacturer> {
  constructor(@InjectRepository(Manufacturer) repo: Repository<Manufacturer>) {
    super(repo);
  }
}
