import { ILoginDto } from '@mdtx/common';
import { Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class LoginDto implements ILoginDto {
  @Property({ type: 'string', format: 'email' })
  username!: string;

  @Property({ type: 'string', example: '!Password123' })
  password!: string;
}
