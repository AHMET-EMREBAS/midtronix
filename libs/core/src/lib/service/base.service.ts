import { AllPropertyType, IBaseQueryDto, IID } from '@mdtx/common';
import { AdvanceLogger } from '../logger';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CountResponse } from '../response';

export class BaseService<T extends AllPropertyType<IID, any>> {
  protected readonly metadata = this.repo.metadata;

  protected readonly logger!: AdvanceLogger;

  constructor(protected readonly repo: Repository<T>) {
    this.logger = new AdvanceLogger(repo.metadata.targetName + 'Service');
  }

  entityName() {
    return this.metadata.targetName;
  }

  protected log(method: string, payload: unknown) {
    this.logger.debug(method, payload);
  }

  protected error(method: string, payload: unknown) {
    this.logger.error(method, payload);
  }

  async count(
    query: Omit<IBaseQueryDto, 'take' | 'skip' | 'withDeleted' | 'order'>
  ): Promise<CountResponse> {
    this.log(this.count.name, query);

    try {
      const count = await this.repo.count(query);

      return { count };
    } catch (err) {
      this.error(this.count.name, query);
      this.error(this.count.name, err);
      throw new InternalServerErrorException();
    }
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
        console.log(err);
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
}
