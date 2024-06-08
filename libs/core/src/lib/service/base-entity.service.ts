/* eslint-disable @typescript-eslint/no-explicit-any */
import { IID } from '@mdtx/common';
import { DeepPartial, ILike, Repository } from 'typeorm';
import { RelationDto, UnsetRelationDto } from './relation.dto';
import {
  InternalServerErrorException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { BaseService } from './base.service';
import { UnprocessableEntityResponse } from '../response';

export class BaseEntityService<T extends IID = IID> extends BaseService<T> {
  private readonly uniqueColumns = this.metadata.uniques.map(
    (e) => e.columns[0].propertyName
  );

  constructor(repo: Repository<T>, protected readonly event: EventEmitter2) {
    super(repo);
  }

  private async isUniqueEntity(entity: DeepPartial<T>) {
    for (const u of this.uniqueColumns) {
      const newValue = (entity as any)[u];

      if (newValue) {
        let foundItem: T;
        try {
          const foundItems = await this.repo.find({
            where: { [u]: ILike(newValue) } as any,
            withDeleted: true,
            take: 1,
          });

          foundItem = foundItems[0];
        } catch (err) {
          this.error(this.isUniqueEntity.name, err);
          throw new InternalServerErrorException(
            'Something went wrong searching the entitites for unique check!'
          );
        }

        if (foundItem) {
          this.error(this.isUniqueEntity.name, foundItem);

          throw new UnprocessableEntityException(
            new UnprocessableEntityResponse({
              message: `${u} must be unique!`,
              errors: [
                {
                  property: u,
                  constraints: { isUnique: `${u} must be unique!` },
                },
              ],
            })
          );
        }
      }
    }
  }

  protected eventName(methodName: string) {
    return `${this.entityName()}.${methodName}`;
  }

  protected emit(methodName: string, value: any) {
    return this.event.emit(this.eventName(methodName), value);
  }

  protected async onlyDifference(
    id: number,
    comming: DeepPartial<T>
  ): Promise<DeepPartial<T>> {
    const found = await this.findOneById(id);

    const onlyDifferent = Object.entries(comming).filter(([k, v]) => {
      if (v != undefined) {
        return v != (found as any)[k];
      }
      return false;
    });

    console.log('Only Difference');
    console.table(onlyDifferent);

    const updatedEntity = (onlyDifferent.length > 0
      ? onlyDifferent
          .map(([key, value]) => ({ [key]: value }))
          .reduce((p, c) => ({ ...p, ...c }))
      : null) as unknown as DeepPartial<T>;

    console.log('updated Entity');
    console.table(updatedEntity);

    return updatedEntity;
  }

  async saveOne(entity: DeepPartial<T>) {
    this.log(this.saveOne.name, entity);
    await this.isUniqueEntity(entity);
    try {
      const result = await this.repo.save({ ...entity });
      this.emit(this.saveOne.name, result);
      return result;
    } catch (err) {
      this.error(this.saveOne.name, err);
      throw new InternalServerErrorException((err as any).detail);
    }
  }

  async updateOne(id: number, entity: DeepPartial<T>) {
    this.log(this.updateOne.name, { id, ...entity });

    const updatedEntity = await this.onlyDifference(id, entity);

    if (updatedEntity) {
      try {
        await this.repo.save({ id, ...updatedEntity });
        this.emit(this.updateOne.name, { updatedEntity, ...entity });
        return { ...updatedEntity, ...entity };
      } catch (err) {
        this.error(this.updateOne.name, { id, ...entity });
        throw new InternalServerErrorException();
      }
    }
    return updatedEntity;
  }

  async deleteOneById(id: number) {
    this.log(this.deleteOneById.name, { id });

    const found = await this.findOneById(id);
    try {
      await this.repo.softDelete(id);

      this.emit(this.deleteOneById.name, found);
      return found;
    } catch (err) {
      this.error(this.deleteOneById.name, { id });
      throw new InternalServerErrorException();
    }
  }

  async addRelation(relationDto: RelationDto) {
    this.log(this.addRelation.name, { ...relationDto });

    await this.findOneById(relationDto.id);
    try {
      await this.repo
        .createQueryBuilder()
        .relation(relationDto.relationName)
        .of(relationDto.id)
        .add(relationDto.relationId);

      const found = await this.findOneById(relationDto.id);

      this.emit(this.addRelation.name, found);
      return found;
    } catch (err) {
      this.error(this.addRelation.name, relationDto);
      throw new InternalServerErrorException();
    }
  }

  async setRelation(relationDto: RelationDto) {
    this.log(this.setRelation.name, { ...relationDto });
    await this.findOneById(relationDto.id);
    try {
      await this.repo
        .createQueryBuilder()
        .relation(relationDto.relationName)
        .of(relationDto.id)
        .set(null);

      const found = await this.findOneById(relationDto.id);

      this.emit(this.setRelation.name, found);

      return found;
    } catch (err) {
      this.error(this.setRelation.name, relationDto);
      throw new InternalServerErrorException();
    }
  }

  async removeRelation(relationDto: RelationDto) {
    this.log(this.removeRelation.name, { ...relationDto });
    await this.findOneById(relationDto.id);
    try {
      await this.repo
        .createQueryBuilder()
        .relation(relationDto.relationName)
        .of(relationDto.id)
        .remove(relationDto.relationId);

      const found = await this.findOneById(relationDto.id);

      this.emit(this.removeRelation.name, found);

      return found;
    } catch (err) {
      this.error(this.removeRelation.name, relationDto);
      throw new InternalServerErrorException();
    }
  }

  async unsetRelation(relationDto: UnsetRelationDto) {
    this.log(this.unsetRelation.name, { ...relationDto });
    await this.findOneById(relationDto.id);
    try {
      await this.repo
        .createQueryBuilder()
        .relation(relationDto.relationName)
        .of(relationDto.id)
        .set(null);

      const found = await this.findOneById(relationDto.id);

      this.emit(this.unsetRelation.name, found);

      return found;
    } catch (err) {
      this.error(this.unsetRelation.name, relationDto);
      throw new InternalServerErrorException();
    }
  }
}
