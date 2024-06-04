import { IID } from '@mdtx/common';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { BaseGeneralQuery } from '../dto';
import { RelationDto, UnsetRelationDto } from './relation-dto';

export class BaseEntityService<
  T extends IID,
  CreateDto extends DeepPartial<T>,
  UdpateDto extends DeepPartial<T>,
  Query extends BaseGeneralQuery
> {
  constructor(protected readonly repo: Repository<T>) {}

  protected log(method: string, msg: any) {
    console.table({ entity: `${this.repo.metadata.targetName}`, method });
    console.table(msg);
  }

  findAll(query: Query) {
    this.log('findAll', query);
    return this.repo.find(query);
  }

  findOneById(id: T['id']) {
    this.log('findOneById', id);

    return this.repo.findOneBy({ id } as FindOptionsWhere<T>);
  }

  findOneBy<P extends keyof T>(key: P, value: T[P]) {
    this.log('findOneBy', { key, value });

    return this.repo.findOneBy({ [key]: value } as FindOptionsWhere<T>);
  }

  saveOne(entity: CreateDto) {
    this.log('saveOne', entity);
    return this.repo.save({ ...entity });
  }

  updateOne(id: number, entity: UdpateDto) {
    this.log('updateOne', { id, entity });
    return this.repo.save({ id, ...entity });
  }

  deleteOneById(id: number) {
    this.log('deleteOne', id);
    return this.repo.softDelete(id);
  }

  addRelation(relationDto: RelationDto) {
    this.log('addRelation', relationDto);
    return this.repo
      .createQueryBuilder()
      .relation(relationDto.relationName)
      .of(relationDto.id)
      .add(relationDto.relationId);
  }

  setRelation(relationDto: RelationDto) {
    this.log('setRelation', relationDto);
    return this.repo
      .createQueryBuilder()
      .relation(relationDto.relationName)
      .of(relationDto.id)
      .set(relationDto.relationId);
  }

  removeRelation(relationDto: RelationDto) {
    this.log('removeRelation', relationDto);
    return this.repo
      .createQueryBuilder()
      .relation(relationDto.relationName)
      .of(relationDto.id)
      .remove(relationDto.relationId);
  }

  unsetRelation(relationDto: UnsetRelationDto) {
    this.log('unsetRelation', relationDto);
    return this.repo
      .createQueryBuilder()
      .relation(relationDto.relationName)
      .of(relationDto.id)
      .set(null);
  }
}
