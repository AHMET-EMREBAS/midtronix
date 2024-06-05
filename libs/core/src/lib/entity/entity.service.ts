/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseQueryDto, IID } from '@mdtx/common';
import { DeepPartial, FindOptionsWhere, ILike, Repository } from 'typeorm';
import { RelationDto, UnsetRelationDto } from './relation.dto';
import { AdvanceLogger } from '../logger';
import {
  InternalServerErrorException,
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
        try {
          const foundItem = await this.repo.findOneBy({
            [u]: ILike(newValue),
          } as any);

          if (foundItem) {
            this.error(this.isUniqueEntity.name, foundItem);
            throw new InputValidationException([
              {
                property: u,
                constraints: { isUniuque: `${u} must be unique!` },
              },
            ]);
          }
        } catch (err) {
          this.error(this.isUniqueEntity.name, err);
          throw new InternalServerErrorException();
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

  async findAll(query?: IBaseQueryDto) {
    this.log(this.findAll.name, query);
    if (query) {
      const { search, order, skip, take, where, withDeleted } = query;
      const whereObj = where ?? search;
      try {
        return await this.repo.find({
          take,
          skip,
          withDeleted,
          order,
          where: whereObj,
        });
      } catch (err) {
        this.error(this.findAll.name, query);
        this.error(this.findAll.name, err);
        throw new InternalServerErrorException();
      }
    }
    return await this.repo.find({ take: 100 });
  }

  async findOneById(id: T['id']) {
    this.log(this.findOneById.name, { id });
    let found: T | null;
    try {
      found = await this.repo.findOneBy({ id } as FindOptionsWhere<T>);
    } catch (err) {
      this.error(this.findOneById.name, { id });
      throw new InternalServerErrorException();
    }

    if (found) return found;

    throw new NotFoundException();
  }

  async findOneBy<P extends keyof T>(key: P, value: T[P]) {
    this.log(this.findOneBy.name, { key, value });

    let found: T | null;

    try {
      found = await this.repo.findOneBy({
        [key]: value,
      } as FindOptionsWhere<T>);
    } catch (err) {
      this.error(this.findOneBy.name, { key, value, err });
      throw new InternalServerErrorException();
    }
    if (found) return found;

    throw new NotFoundException();
  }

  async saveOne(entity: DeepPartial<T>) {
    this.log(this.saveOne.name, entity);

    await this.isUniqueEntity(entity);

    try {
      return await this.repo.save({ ...entity });
    } catch (err) {
      this.error(this.saveOne.name, err);
      throw new InternalServerErrorException((err as any).detail);
    }
  }

  async updateOne(id: number, entity: DeepPartial<T>) {
    this.log(this.updateOne.name, { id, ...entity });

    try {
      return await this.repo.save({ id, ...entity });
    } catch (err) {
      this.error(this.updateOne.name, { id, ...entity });
      throw new InternalServerErrorException();
    }
  }

  async deleteOneById(id: number) {
    this.log(this.deleteOneById.name, { id });

    try {
      return await this.repo.softDelete(id);
    } catch (err) {
      this.error(this.deleteOneById.name, { id });
      throw new InternalServerErrorException();
    }
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
