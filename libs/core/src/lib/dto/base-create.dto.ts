import { Exclude } from 'class-transformer';
import { BaseEntity } from '../entity';
import { Property } from '../property';

@Exclude()
export class BaseCreateDto implements Pick<BaseEntity, 'active'> {
  @Property({ type: 'boolean' })
  active!: boolean;
}
