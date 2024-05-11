import { Exclude } from 'class-transformer';
import { Property } from '../property';
import { OmitType } from '@nestjs/swagger';

/**
 * @param id
 * @param relationName
 * @param relationId
 */
@Exclude()
export class RelationDto {
  @Property({ type: 'number', required: true }) id!: number;
  @Property({ type: 'string', required: true }) relationName!: string;
  @Property({ type: 'number', required: true }) relationId!: number;
}

/**
 * @param id
 * @param relationName
 */
@Exclude()
export class UnsetRelationDto extends OmitType(RelationDto, ['relationId']) {}

export function createRelationDto(relations: string[]) {
  @Exclude()
  class __RelationDto extends RelationDto {
    @Property({ type: 'string', enum: relations })
    override relationName!: string;
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
