import { Exclude } from 'class-transformer';
import { Property } from '../property';

@Exclude()
export class AuthDto {
  @Property({ type: 'number' })
  userId!: number;

  @Property({ type: 'string' })
  userRole!: string;

  @Property({ type: 'number' })
  scope!: string;

  @Property({ type: 'string' })
  deviceId!: number;

  @Property({ type: 'string' })
  appName!: string;
}
