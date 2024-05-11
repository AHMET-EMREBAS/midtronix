import { FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';
import { PaginatorDto } from '../dto';

export class RepositoryService<T extends ObjectLiteral> {
  constructor(protected repository: Repository<T>) {}

  findAll(paginator: PaginatorDto, where?: FindOptionsWhere<T>) {
    return this.repository.find({ ...paginator, where });
  }
}
