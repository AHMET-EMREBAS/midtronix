import { IEmail } from '@mdtx/models';
import { BaseEntity, UniqueColumn, Entity, StringColumn } from '@mdtx/core';

@Entity()
export class Email extends BaseEntity implements IEmail {
  @UniqueColumn()
  name!: string;
}
