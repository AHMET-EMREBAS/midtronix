import { ILoginWithSSODto } from '@mdtx/common';
import { Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class LoginWithSSO implements ILoginWithSSODto {
  @Property({ type: 'string', format: 'email' }) username!: string;
  @Property({ type: 'string', format: 'uuid' }) sso!: string;
}
