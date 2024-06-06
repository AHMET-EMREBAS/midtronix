import { ILoginWithSSODto } from '@mdtx/common';
import { Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class LoginWithSSODto implements ILoginWithSSODto {
  @Property({ type: 'string', format: 'email' }) username!: string;
  @Property({ type: 'string' }) sso!: string;
}
