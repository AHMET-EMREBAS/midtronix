import { Exclude } from 'class-transformer';
import { Property } from '../property';
import { OmitType } from '@nestjs/swagger';

/**
 * @param id
 * @param relationName
 * @param relationId
 */
@Exclude()
export class AddRelationDto {
  @Property({ type: 'number', required: true }) id!: number;
  @Property({ type: 'string', required: true }) relationName!: string;
  @Property({ type: 'number', required: true }) relationId!: number;
}

/**
 * @param id
 * @param relationName
 * @param relationId
 */
@Exclude()
export class RemoveRelationDto extends AddRelationDto {}

/**
 * @param id
 * @param relationName
 * @param relationId
 */
@Exclude()
export class SetRelationDto extends AddRelationDto {}

/**
 * @param id
 * @param relationName
 */
@Exclude()
export class UnsetRelationDto extends OmitType(AddRelationDto, [
  'relationId',
]) {}
