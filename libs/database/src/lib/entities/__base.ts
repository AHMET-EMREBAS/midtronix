import {
  IBaseEntity,
  IComment,
  IID,
  ILike,
  IOwner,
  IProductCommon,
  IUrl,
  ICredential,
} from '@mdtx/common';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Type,
  OwnerRelation,
  OneRelation,
} from '@mdtx/core';

// export interface ILike<TUser> extends IOwner<TUser> {
// ILike

export class IDEntity implements IID {
  @PrimaryGeneratedColumn()
  id!: number;
}

export class BaseEntity extends IDEntity implements IBaseEntity {
  @CreateDateColumn() createdAt!: Date;
  @UpdateDateColumn() updatedAt!: Date;
  @DeleteDateColumn() deletedAt!: Date;
}

export class NameEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  name!: string;
}

export class DescriptionEntity extends NameEntity {
  @Column({ type: 'varchar', nullable: true })
  description!: string;
}

export class UrlEntity extends NameEntity implements IUrl {
  @Column({ type: 'varchar' })
  url!: string;
}

export class CredentialEntity extends BaseEntity implements ICredential {
  @Column({ type: 'varchar', unique: true }) username!: string;
  @Column({ type: 'varchar' }) password!: string;
}

export class ProductCommonEntity
  extends DescriptionEntity
  implements IProductCommon
{
  @Column({ type: 'varchar', unique: true })
  upc!: string;
}

export function OwnerEntity<T extends IID>(owner: Type<T>) {
  class Owner extends BaseEntity implements IOwner<T> {
    @OwnerRelation(owner)
    owner!: T;
  }
  return Owner;
}

export function CommentEntity<TOwner extends IID, TTarget extends IID>(
  owner: Type<TOwner>,
  target: Type<TTarget>
) {
  class Comment extends BaseEntity implements IComment<TOwner, TTarget> {
    @Column({ type: 'varchar' })
    comment!: string;

    @OneRelation(target)
    target!: TTarget;

    @OneRelation(owner)
    owner!: TOwner;
  }

  return Comment;
}

export function LikeEntity<T extends IID>(owner: Type<T>) {
  class Like extends OwnerEntity(owner) implements ILike<T> {
    @Column({ type: 'boolean', nullable: true })
    like?: boolean;
  }

  return Like;
}
