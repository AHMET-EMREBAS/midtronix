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
} from '../dto';

import { IID, ResourceMetadata } from '@mdtx/common';
import { NotFoundException } from '@nestjs/common';

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
    .filter((e) => {
      return e.type === 'varchar' || e.type === undefined;
    })
    .map((e) => e.propertyName);

  constructor(protected repository: Repository<T>) {}

  protected __where(
    search: string | undefined
  ): FindOptionsWhere<T> | undefined {
    return search
      ? (this.__searchables.map((e) => ({
          [e]: ILike(`%${search}%`),
        })) as FindOptionsWhere<any>)
      : undefined;
  }

  /**
   *
   * @param paginator Paginator
   * @param query Entity Specific Query
   * @param select list of entity property names
   * @returns
   */
  async findAll(
    paginator: PaginatorDto,
    query: any = {},
    select?: any,
    search?: any
  ) {
    const where = search ?? query;
    const { take, skip } = paginator;
    return await this.repository.find({ take, skip, select, where: where });
  }

  async findOne(options: FindOneOptions<T>) {
    return this.repository.findOne(options);
  }

  async findOneById(id: T['id']) {
    const found = await this.repository.findOneBy({
      id,
    } as FindOptionsWhere<T>);

    if (found) return found;

    throw new NotFoundException('Entity Not Found');
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

  async count(query: FindOptionsWhere<T> = {}) {
    return { count: await this.repository.count({ where: query }) };
  }

  async save(entity: DeepPartial<T>) {
    return await this.repository.save(entity);
  }

  async saveMany(entities: DeepPartial<T>[]) {
    return await this.repository.save(entities);
  }

  async deleteById(id: number): Promise<T> {
    const found = await this.findOneById(id);
    await this.repository.delete(found.id);
    return found;
  }

  async updateOneById(id: number, entity: DeepPartial<T>): Promise<T> {
    await this.findOneById(id);
    return await this.save({ ...entity, id });
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
