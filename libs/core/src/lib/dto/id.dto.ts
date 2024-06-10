import { Exclude } from 'class-transformer';
import { Property } from '../property';

@Exclude()
export class IDDto {
  @Property({ type: 'integer', required: true })
  id!: number;
}
