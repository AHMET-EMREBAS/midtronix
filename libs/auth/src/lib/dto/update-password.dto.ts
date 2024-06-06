import { Exclude } from 'class-transformer';
import { LoginDto } from './login.dto';
import { Property } from '@mdtx/core';

@Exclude()
export class UpdatePasswordDto extends LoginDto {
  @Property({
    type: 'string',
    format: 'password',
    required: true,
  })
  newPassword!: string;
}
