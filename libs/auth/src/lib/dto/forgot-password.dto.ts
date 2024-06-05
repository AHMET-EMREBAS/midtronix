import { IForgotPasswordDto } from '@mdtx/common';
import { Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class ForgotPasswordDto implements IForgotPasswordDto {
  @Property({ type: 'string', format: 'email' })
  username!: string;
}
