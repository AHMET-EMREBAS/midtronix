import { Exclude } from 'class-transformer';
import { Property } from '../property';

@Exclude()
export class IDDto {
  @Property({ required: true, type: 'number' })
  id!: number;
}
