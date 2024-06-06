import { Exclude } from 'class-transformer';
import { LoginDto } from './login.dto';
import { Property } from '@mdtx/core';
import { IUpdatePasswordDto } from '@mdtx/common';

@Exclude()
export class UpdatePasswordDto extends LoginDto implements IUpdatePasswordDto {
  @Property({
    type: 'string',
    format: 'password',
    required: true,
  })
  newPassword!: string;
}
