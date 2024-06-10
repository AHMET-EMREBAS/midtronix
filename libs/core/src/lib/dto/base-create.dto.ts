import { Exclude } from 'class-transformer';
import { BaseEntity } from '../service';
import { Property } from '../property';
import { BaseDto } from './base.dto';

@Exclude()
export class BaseCreateDto<T>
  extends BaseDto<T>
  implements Pick<BaseEntity, 'active'>
{
  @Property({ type: 'boolean' })
  active!: boolean;

  @Property({ type: 'string' })
  notes!: string;
}
