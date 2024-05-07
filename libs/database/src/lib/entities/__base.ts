import { IBaseEntity, IID } from '@mdtx/common';
import { PrimageGenertedColumn } from '@mdtx/core';
export class IDEntity implements IID {
  @PrimageGenertedColumn()
  id: number;
}

export class BaseEntity extends IDEntity implements IBaseEntity {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
