/* eslint-disable @typescript-eslint/no-explicit-any */
import { IID } from '@mdtx/common';
import {
  DeepPartial,
  FindManyOptions,
  FindOptionsWhere,
  ILike,
  Repository,
} from 'typeorm';
import { RelationDto, UnsetRelationDto } from './relation.dto';
import { AdvanceLogger } from '../logger';
import {
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InputValidationException } from '../error';

export class BaseEntityService<T extends IID = IID> {
  private readonly metadata = this.repo.metadata;
  private readonly uniqueColumns = this.metadata.uniques.map(
    (e) => e.columns[0].propertyName
  );

  protected readonly logger!: AdvanceLogger;
  constructor(protected readonly repo: Repository<T>) {
    this.logger = new AdvanceLogger(repo.metadata.targetName + 'Service');
  }

  private async isUniqueEntity(entity: DeepPartial<T>) {
    for (const u of this.uniqueColumns) {
      const newValue = (entity as any)[u];

      if (newValue) {
        const foundItem = await this.repo.findOneBy({
          [u]: ILike(newValue),
        } as any);

        if (foundItem) {
          throw new InputValidationException([
            { property: u, constraints: { isUniuque: `${u} must be unique!` } },
          ]);
        }
      }
    }
  }

  entityName() {
    return this.repo.metadata.targetName;
  }

  protected context(suffix = '') {
    return this.repo.metadata.targetName + ' ' + suffix;
  }

  protected log(method: string, payload: any) {
    this.logger.debug(method, payload);
  }

  protected error(method: string, payload: any) {
    this.logger.error(method, payload);
  }

  findAll(query?: FindManyOptions<T>) {
    this.log(this.findAll.name, query);
    return this.repo.find(query);
  }

  async findOneById(id: T['id']) {
    this.log(this.findOneById.name, { id });
    const found = await this.repo.findOneBy({ id } as FindOptionsWhere<T>);
    if (!found) throw new NotFoundException();

    return found;
  }

  async findOneBy<P extends keyof T>(key: P, value: T[P]) {
    this.log(this.findOneBy.name, { key, value });
    const found = await this.repo.findOneBy({
      [key]: value,
    } as FindOptionsWhere<T>);

    if (!found) throw new NotFoundException();

    return found;
  }

  async saveOne(entity: DeepPartial<T>) {
    this.log(this.saveOne.name, entity);

    await this.isUniqueEntity(entity);
    try {
      return await this.repo.save({ ...entity });
    } catch (err) {
      this.error(this.saveOne.name, err);
      throw new UnprocessableEntityException((err as any).detail);
    }
  }

  async updateOne(id: number, entity: DeepPartial<T>) {
    this.log(this.updateOne.name, { id, ...entity });

    try {
      return await this.repo.save({ id, ...entity });
    } catch (err) {
      throw new UnprocessableEntityException((err as any).detail);
    }
  }

  deleteOneById(id: number) {
    this.log(this.deleteOneById.name, { id });
    return this.repo.softDelete(id);
  }

  addRelation(relationDto: RelationDto) {
    this.log(this.addRelation.name, { ...relationDto });
    return this.repo
      .createQueryBuilder()
      .relation(relationDto.relationName)
      .of(relationDto.id)
      .add(relationDto.relationId);
  }

  setRelation(relationDto: RelationDto) {
    this.log(this.setRelation.name, { ...relationDto });
    return this.repo
      .createQueryBuilder()
      .relation(relationDto.relationName)
      .of(relationDto.id)
      .set(relationDto.relationId);
  }

  removeRelation(relationDto: RelationDto) {
    this.log(this.removeRelation.name, { ...relationDto });
    return this.repo
      .createQueryBuilder()
      .relation(relationDto.relationName)
      .of(relationDto.id)
      .remove(relationDto.relationId);
  }

  unsetRelation(relationDto: UnsetRelationDto) {
    this.log(this.unsetRelation.name, { ...relationDto });
    return this.repo
      .createQueryBuilder()
      .relation(relationDto.relationName)
      .of(relationDto.id)
      .set(null);
  }
}
