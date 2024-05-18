/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeepPartial,
  Equal,
  FindOneOptions,
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
import { IID, ResourceMetadata } from '@mdtx/common';
import { UnprocessableEntityException } from '@nestjs/common';

export class RepositoryService<T extends IID> {
  protected readonly __md = this.repository.metadata;

  protected readonly __entityName = this.__md.targetName;
  protected readonly __columns = this.__md.columns.map((e) => e.propertyName);
  protected readonly __relations = this.__md.relations.map(
    (e) => e.propertyName
  );
  protected readonly __uniques = this.__md.uniques.map(
    (e) => e.columns[0].propertyName
  );

  protected readonly __searchables = this.__md.columns
    .filter((e) => e.type === 'varchar' || e.type === 'numeric')
    .map((e) => e.propertyName);

  constructor(protected repository: Repository<T>) {}

  protected __where(
    search: string | undefined
  ): FindOptionsWhere<T> | undefined {
    return search
      ? (this.__searchables.map((e) => ({
          [e]: search,
        })) as FindOptionsWhere<any>)
      : undefined;
  }

  async findAll(paginator: PaginatorDto) {
    const { take, skip, withDeleted, search, select } = paginator;

    if (select)
      select.forEach((e) => {
        if (!this.__columns.includes(e)) {
          throw new UnprocessableEntityException(
            `${this.__entityName} does not have ${e} field!`
          );
        }
      });

    return await this.repository.find({
      take,
      skip,
      withDeleted,
      select: select as any,
      where: this.__where(search),
    });
  }

  async findOne(options: FindOneOptions<T>) {
    return this.repository.findOne(options);
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

  createQueryBuilder(alias?: string) {
    return this.repository.createQueryBuilder(alias);
  }

  async metadata(): Promise<ResourceMetadata> {
    return {
      count: await this.repository.count(),
      columns: this.__md.columns.map((e) => e.propertyName),
      relations: this.__md.relations.map((e) => e.propertyName),
      nullables: [
        ...this.__md.columns
          .filter((e) => e.isNullable)
          .map((e) => e.propertyName),
        ...this.__md.relations
          .filter((e) => e.isNullable)
          .map((e) => e.propertyName),
      ],
      uniques: [
        ...this.__md.uniques
          .map((e) => e.columns.map((e) => e.propertyName).flat())
          .flat(),
      ],
    };
  }
}
