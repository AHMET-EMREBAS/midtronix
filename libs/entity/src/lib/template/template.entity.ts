import { ITemplate } from '@mdtx/interface';
import { BaseEntity, Column, Entity } from '@mdtx/core';

@Entity()
export class Template extends BaseEntity implements ITemplate {
  @Column({ type: 'varchar', unique: true })
  name!: string;
}
