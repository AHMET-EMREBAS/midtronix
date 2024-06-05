/* eslint-disable @typescript-eslint/no-explicit-any */
import { IID } from '@mdtx/common';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { BaseGeneralQuery } from '../dto';
import { RelationDto, UnsetRelationDto } from './relation.dto';
import { AdvanceLogger } from '../logger';

export class BaseEntityService<
  T extends IID,
  CreateDto extends DeepPartial<T>,
  UpdateDto extends DeepPartial<T>,
  Query extends BaseGeneralQuery
> {
  protected readonly logger!: AdvanceLogger;

  constructor(protected readonly repo: Repository<T>) {
    this.logger = new AdvanceLogger(repo.metadata.targetName + 'Service');
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

  findAll(query: Query) {
    this.log(this.findAll.name, query);
    return this.repo.find(query);
  }

  findOneById(id: T['id']) {
    this.log(this.findOneById.name, { id });
    return this.repo.findOneBy({ id } as FindOptionsWhere<T>);
  }

  findOneBy<P extends keyof T>(key: P, value: T[P]) {
    this.log(this.findOneBy.name, { key, value });
    return this.repo.findOneBy({ [key]: value } as FindOptionsWhere<T>);
  }

  saveOne(entity: CreateDto) {
    this.log(this.saveOne.name, entity);
    return this.repo.save({ ...entity });
  }

  updateOne(id: number, entity: UpdateDto) {
    this.log(this.updateOne.name, { id, ...entity });
    return this.repo.save({ id, ...entity });
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
