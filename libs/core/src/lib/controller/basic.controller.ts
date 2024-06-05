import { IBaseQueryDto, IID } from '@mdtx/common';
import { BaseEntityService, RelationDto, UnsetRelationDto } from '../entity';
import { AdvanceLogger } from '../logger';
import { AuthDto } from '../auth';
import { DeepPartial } from 'typeorm';

export class BasicController<
  T extends IID,
  CreateDto extends DeepPartial<T>,
  UpdateDto extends DeepPartial<T>,
  Query extends IBaseQueryDto
> {
  protected readonly logger!: AdvanceLogger;

  constructor(protected readonly service: BaseEntityService<T>) {
    this.logger = new AdvanceLogger(this.service.entityName() + 'Controller');
  }

  findAll(query: Query, authDto: AuthDto) {
    this.logger.debug(this.findAll.name, query);
    this.logger.debug(this.findAll.name, authDto);
    return this.service.findAll(query);
  }

  findOneById(id: number, authDto: AuthDto) {
    this.logger.debug(this.findOneById.name, { id });
    this.logger.debug(this.findOneById.name, authDto);
    return this.service.findOneById(id);
  }

  saveOne(entity: CreateDto, authDto: AuthDto) {
    this.logger.debug(this.saveOne.name, entity);
    this.logger.debug(this.saveOne.name, authDto);
    return this.service.saveOne(entity);
  }

  updateOne(id: number, entity: UpdateDto, authDto: AuthDto) {
    this.logger.debug(this.updateOne.name, { id, ...entity });
    this.logger.debug(this.updateOne.name, authDto);
    return this.service.updateOne(id, entity);
  }

  deleteOneById(id: number, authDto: AuthDto) {
    this.logger.debug(this.updateOne.name, { id });
    this.logger.debug(this.updateOne.name, authDto);
    return this.service.deleteOneById(id);
  }

  addRelation(relationDto: RelationDto, authDto: AuthDto) {
    this.logger.debug(this.updateOne.name, { ...relationDto });
    this.logger.debug(this.updateOne.name, authDto);
    return this.service.addRelation(relationDto);
  }

  setRelation(relationDto: RelationDto, authDto: AuthDto) {
    this.logger.debug(this.updateOne.name, { ...relationDto });
    this.logger.debug(this.updateOne.name, authDto);
    return this.service.setRelation(relationDto);
  }

  unsetRelation(relationDto: UnsetRelationDto, authDto: AuthDto) {
    this.logger.debug(this.updateOne.name, { ...relationDto });
    this.logger.debug(this.updateOne.name, authDto);
    return this.service.unsetRelation(relationDto);
  }
}
