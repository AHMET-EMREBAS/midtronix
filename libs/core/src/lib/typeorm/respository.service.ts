import {
  DeepPartial,
  Equal,
  FindOptionsWhere,
  ILike,
  Repository,
} from 'typeorm';
import {
  DeleteResultDto,
  PaginatorDto,
  RelationDto,
  UnsetRelationDto,
  UpdateResultDto,
} from '../dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IID } from '@mdtx/common';

export class RepositoryService<T extends IID> {
  constructor(protected repository: Repository<T>) {}

  async findAll(paginator: PaginatorDto, where?: FindOptionsWhere<T>) {
    return await this.repository.find({ ...paginator, where });
  }

  async findOneById(id: T['id']) {
    return await this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  async findOneContainsBy(property: keyof T, query: string) {
    return await this.repository.findOneBy({
      [property]: ILike(`%${query}%`),
    } as FindOptionsWhere<T>);
  }

  async findOneEqualsBy(property: keyof T, query: string) {
    return await this.repository.findOneBy({
      [property]: ILike(`${query}`),
    } as FindOptionsWhere<T>);
  }

  async count() {
    return { count: await this.repository.count() };
  }

  async save(entity: DeepPartial<T>) {
    return await this.repository.save(entity);
  }

  async saveMany(entities: DeepPartial<T>[]) {
    return await this.repository.save(entities);
  }

  /**
   * Delete all entities that match with the criteria
   * @param property
   * @param query
   * @returns
   */
  deleteAllBy<P extends keyof T>(
    property: keyof T,
    query: T[P]
  ): Promise<DeleteResultDto> {
    return this.repository.delete({
      [property]: Equal(query),
    } as FindOptionsWhere<T>);
  }

  async deleteById(id: number): Promise<DeleteResultDto> {
    return await this.repository.delete(id);
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
  ): Promise<UpdateResultDto> {
    return this.repository.update(
      { [property]: Equal(query) } as FindOptionsWhere<T>,
      entity
    );
  }

  async updateOneById(
    id: number,
    entity: QueryDeepPartialEntity<T>
  ): Promise<UpdateResultDto> {
    return await this.repository.update(id, entity);
  }

  async addRelation(relationDto: RelationDto<T>) {
    const { id, relationId, relationName } = relationDto;
    await this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .add(relationId);
    return await this.findOneById(id);
  }

  async removeRelation(relationDto: RelationDto<T>) {
    const { id, relationId, relationName } = relationDto;
    await this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .remove(relationId);

    return await this.findOneById(id);
  }

  async setRelation(relationDto: RelationDto<T>) {
    const { id, relationId, relationName } = relationDto;
    await this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(relationId);
    return await this.findOneById(id);
  }

  async unsetRelation(relationDto: UnsetRelationDto<T>) {
    const { id, relationName } = relationDto;
    await this.repository
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(null);

    return await this.findOneById(id);
  }

  createQueryBuilder() {
    return this.repository.createQueryBuilder();
  }

  metadata() {
    return this.repository.metadata;
  }
}
