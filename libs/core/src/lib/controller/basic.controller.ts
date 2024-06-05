import { IBaseQueryDto, IID } from '@mdtx/common';
import { BaseEntityService, RelationDto, UnsetRelationDto } from '../entity';
import { DeepPartial } from 'typeorm';
import { BaseGeneralQuery } from '../dto';
import { AdvanceLogger } from '../logger';

export class BasicController<
  T extends IID,
  CreateDto extends DeepPartial<T>,
  UpdateDto extends DeepPartial<T>,
  Query extends IBaseQueryDto
> {
  protected readonly logger!: AdvanceLogger;
  constructor(
    protected readonly service: BaseEntityService<
      T,
      CreateDto,
      UpdateDto,
      Query
    >
  ) {
    this.logger = new AdvanceLogger(this.service.entityName() + 'Controller');
  }

  findAll(query: Query) {
    this.logger.debug(this.findAll.name, query);
    return this.service.findAll(query);
  }

  findOneById(id: number) {
    this.logger.debug(this.findOneById.name, { id });
    return this.service.findOneById(id);
  }

  saveOne(entity: CreateDto) {
    this.logger.debug(this.saveOne.name, entity);
    return this.service.saveOne(entity);
  }

  updateOne(id: number, entity: UpdateDto) {
    this.logger.debug(this.updateOne.name, { id, ...entity });
    return this.service.updateOne(id, entity);
  }

  deleteOne(id: number) {
    this.logger.debug(this.updateOne.name, { id });
    return this.service.deleteOneById(id);
  }

  addRelation(relationDto: RelationDto) {
    this.logger.debug(this.updateOne.name, { ...relationDto });
    return this.service.addRelation(relationDto);
  }

  setRelation(relationDto: RelationDto) {
    this.logger.debug(this.updateOne.name, { ...relationDto });
    return this.service.setRelation(relationDto);
  }

  unsetRelation(relationDto: UnsetRelationDto) {
    this.logger.debug(this.updateOne.name, { ...relationDto });
    return this.service.unsetRelation(relationDto);
  }
}
