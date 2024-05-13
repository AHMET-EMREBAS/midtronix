import {
  DeepPartial,
  Equal,
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

  async count() {
    return { count: await this.repository.count() };
  }

  save(entity: DeepPartial<T>) {
    return this.repository.save(entity);
  }

  saveMany(entities: DeepPartial<T>[]) {
    return this.repository.save(entities);
  }

  /**
   * Delete all entities that match with the criteria
   * @param property
   * @param query
   * @returns
   */
  deleteAllBy<P extends keyof T>(property: keyof T, query: T[P]) {
    return this.repository.delete({
      [property]: Equal(query),
    } as FindOptionsWhere<T>);
  }

  deleteById(id: number) {
    return this.repository.delete(id);
  }

  /**
   * Update all entities that match with the criteria
   * @param property
   * @param query
   * @param entity
   * @returns
   */
  updateAllBy<P extends keyof T>(
    property: keyof T,
    query: T[P],
    entity: QueryDeepPartialEntity<T>
  ) {
    return this.repository.update(
      { [property]: Equal(query) } as FindOptionsWhere<T>,
      entity
    );
  }

  updateOneById(id: number, entity: QueryDeepPartialEntity<T>) {
    return this.repository.update(id, entity);
  }

  addRelation(relationDto: RelationDto<T>) {
    const { id, relationId, relationName } = relationDto;
    return this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .add(relationId);
  }

  removeRelation(relationDto: RelationDto<T>) {
    const { id, relationId, relationName } = relationDto;
    return this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .add(relationId);
  }

  setRelation(relationDto: RelationDto<T>) {
    const { id, relationId, relationName } = relationDto;
    return this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(relationId);
  }

  unsetRelation(relationDto: UnsetRelationDto<T>) {
    const { id, relationName } = relationDto;
    return this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(null);
  }
}
