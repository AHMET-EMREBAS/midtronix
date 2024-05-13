import {
  DeepPartial,
  Entity,
  FindOptionsWhere,
  ILike,
  ObjectLiteral,
  Repository,
} from 'typeorm';
import { PaginatorDto, RelationDto, UnsetRelationDto } from '../dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class RepositoryService<T extends ObjectLiteral> {
  constructor(protected repository: Repository<T>) {}

  findAll(paginator: PaginatorDto, where?: FindOptionsWhere<T>) {
    return this.repository.find({ ...paginator, where });
  }

  findOneById(id: T['id']) {
    return this.repository.findOneBy({ id });
  }

  findOneContainsBy(property: keyof T, query: string) {
    return this.repository.findOneBy({
      [property]: ILike(`%${query}%`),
    } as FindOptionsWhere<T>);
  }

  findOneEqualsBy(property: keyof T, query: string) {
    return this.repository.findOneBy({
      [property]: ILike(`${query}`),
    } as FindOptionsWhere<T>);
  }

  count() {
    return { count: this.repository.count() };
  }

  save(entity: T) {
    return this.repository.save(entity);
  }

  deleteById(id: number) {
    return this.repository.delete(id);
  }

  update(id: number, entity: QueryDeepPartialEntity<T>) {
    return this.repository.update(id, entity);
  }

  addRelation(relationDto: RelationDto) {
    const { id, relationId, relationName } = relationDto;
    return this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .add(relationId);
  }

  removeRelation(relationDto: RelationDto) {
    const { id, relationId, relationName } = relationDto;
    return this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .add(relationId);
  }

  setRelation(relationDto: RelationDto) {
    const { id, relationId, relationName } = relationDto;
    return this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(relationId);
  }

  unsetRelation(relationDto: UnsetRelationDto) {
    const { id, relationName } = relationDto;
    return this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(null);
  }
}
