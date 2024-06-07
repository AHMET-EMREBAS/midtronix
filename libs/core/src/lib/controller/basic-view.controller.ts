import { AllPropertyType, IBaseQueryDto, IID } from '@mdtx/common';
import { BaseViewEntityService } from '../entity';
import { AdvanceLogger } from '../logger';
import { AuthDto } from '../auth';

export class BasicViewController<
  T extends AllPropertyType<IID, string>,
  Query extends IBaseQueryDto
> {
  protected readonly logger!: AdvanceLogger;

  constructor(protected readonly service: BaseViewEntityService<T>) {
    this.logger = new AdvanceLogger(this.service.entityName() + 'Controller');
  }

  count(query: Query, authDto: AuthDto) {
    this.logger.debug(this.count.name, query);
    this.logger.debug(this.count.name, authDto);
    return this.service.count(query);
  }

  findAll(query: Query, authDto: AuthDto) {
    this.logger.debug(this.findAll.name, query);
    this.logger.debug(this.findAll.name, authDto);
    return this.service.findAll(query);
  }

  findOneById(id: T['id'], authDto: AuthDto) {
    this.logger.debug(this.findOneById.name, { id });
    this.logger.debug(this.findOneById.name, authDto);
    return this.service.findOneById(id);
  }
}
