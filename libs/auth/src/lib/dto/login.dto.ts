import { ILogin } from '@mdtx/common';
import { Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class LoginDto implements ILogin {
  @Property({ type: 'string', format: 'email' })
  username!: string;

  @Property({ type: 'string', format: 'password' })
  password!: string;
}
