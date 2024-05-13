import { Exclude } from 'class-transformer';
import { Property } from '../property';
import { OmitType } from '@nestjs/swagger';
import { IID } from '@mdtx/common';

/**
 * @param id
 * @param relationName
 * @param relationId
 */
@Exclude()
export class RelationDto<
  T extends IID,
  P = keyof T extends string ? keyof T : string
> {
  @Property({ type: 'number', required: true }) id!: T['id'];
  @Property({ type: 'string', required: true }) relationName!: P;
  @Property({ type: 'number', required: true }) relationId!: number;
}

/**
 * @param id
 * @param relationName
 */
@Exclude()
export class UnsetRelationDto<
  T extends IID,
  P = keyof T extends string ? keyof T : string
> {
  @Property({ type: 'number', required: true }) id!: T['id'];
  @Property({ type: 'string', required: true }) relationName!: P;
}

export function createRelationDto<T extends IID>(relations: string[]) {
  @Exclude()
  class __RelationDto extends RelationDto<T> {
    @Property({ type: 'string', enum: relations })
    override relationName!: keyof T extends string ? string & keyof T : string;
  }

  return __RelationDto;
}

export function createUnsetRelationDto(relations: string[]) {
  @Exclude()
  class __RelationDto extends OmitType(createRelationDto(relations), [
    'relationId',
  ]) {}

  return __RelationDto;
}
