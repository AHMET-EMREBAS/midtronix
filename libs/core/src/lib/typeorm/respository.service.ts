/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeepPartial,
  FindOneOptions,
  FindOptionsOrder,
  FindOptionsWhere,
  ILike,
  Repository,
} from 'typeorm';
import { PaginatorDto, RelationDto, SortDto, UnsetRelationDto } from '../dto';

import { IID, ResourceMetadata } from '@mdtx/common';
import {
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

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

  constructor(
    protected readonly repository: Repository<T>,
    protected readonly viewRepository?: Repository<any>
  ) {}

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
    search?: any,
    sort?: SortDto
  ) {
    const where = search ?? query;

    console.log(where);
    const { take, skip } = paginator;

    const orderBy = sort?.orderBy ?? 'id';
    const orderDir = sort?.orderDir ?? 'ASC';

    const queryObject = {
      take,
      skip,
      select,
      where: where,
      order: { [orderBy]: orderDir } as FindOptionsOrder<T>,
    };

    console.log(queryObject);

    if (this.viewRepository) {
      return this.viewRepository.find(queryObject);
    }
    return await this.repository.find(queryObject);
  }

  async findOne(options: FindOneOptions<T>) {
    return this.repository.findOne(options);
  }

  async findOneById(id: any) {
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

  private async __isUnqiue(entity: DeepPartial<T>) {
    for (const u of this.__uniques) {
      const newValue = (entity as any)[u];

      if (newValue) {
        const foundItem = await this.repository.findOneBy({
          [u]: ILike(newValue),
        } as any);

        if (foundItem) {
          throw new UnprocessableEntityException({
            message: 'Invalid Input',
            messages: [u, [`${u} must be unique!`]],
          });
        }
      }
    }
  }
  async save(entity: DeepPartial<T>) {
    await this.__isUnqiue(entity);
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
    const found = await this.findOneById(id);

    const updatedRecords = Object.entries(entity)
      .map(([key, value]) => {
        if ((found as any)[key] === value) {
          return null;
        }
        return { [key]: value };
      })
      .filter((e) => e);

    const updated =
      updatedRecords.length > 0
        ? updatedRecords?.reduce((p, c) => ({ ...p, ...c }))
        : null;

    if (updated) return await this.save({ ...updated, id } as any);

    return found;
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
