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

/**
 * @param id number
 */
export class IDEntity implements IID {
  @PrimaryGeneratedColumn()
  id!: number;
}

/**
 * @param id number
 * @param createdAt Date
 * @param updatedAt Date
 * @param deletedAt Date
 */
export class BaseEntity extends IDEntity implements IBaseEntity {
  @CreateDateColumn() createdAt!: Date;
  @UpdateDateColumn() updatedAt!: Date;
  @DeleteDateColumn() deletedAt!: Date;
}

/**
 * @param name string
 */
export class NameEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  name!: string;
}

/**
 * @param name string
 * @param description string
 */
export class DescriptionEntity extends NameEntity {
  @Column({ type: 'varchar', nullable: true })
  description!: string;
}

/**
 * @param name
 * @param url
 */
export class UrlEntity extends NameEntity implements IUrl {
  @Column({ type: 'varchar', nullable: true })
  url!: string;
}

/**
 * @param username string
 * @param password string
 */
export class CredentialEntity extends BaseEntity implements ICredential {
  @Column({ type: 'varchar', unique: true }) username!: string;
  @Column({ type: 'varchar' }) password!: string;
}

/**
 * @param name
 * @param description
 * @param upc
 */
export class ProductCommonEntity
  extends DescriptionEntity
  implements IProductCommon
{
  @Column({ type: 'varchar', unique: true })
  upc!: string;
}

/**
 * Create an entity owned by the owner
 * @param owner
 * @returns
 * @param owner Entity
 */
export function OwnerEntity<T extends IID>(owner: Type<T>) {
  class Owner extends BaseEntity implements IOwner<T> {
    @OwnerRelation(owner)
    owner!: T;
  }
  return Owner;
}

/**
 * Create a comment entity for the owner and the target such as user (owner) and post (target)
 * @param owner Entity
 * @param target Entity
 * @returns
 * @param comment string
 * @param target Entity
 * @param owner Entity
 */
export function CommentEntity<TOwner extends IID, TTarget extends IID>(
  owner: Type<TOwner>,
  target: Type<TTarget>
) {
  class Comment extends BaseEntity implements IComment<TOwner, TTarget> {
    @Column({ type: 'varchar', nullable: true })
    comment!: string;

    @OneRelation(target)
    target!: TTarget;

    @OneRelation(owner)
    owner!: TOwner;
  }

  return Comment;
}

/**
 * Create like entity for the owner
 * @param owner
 * @returns
 * @param like boolean
 */
export function LikeEntity<T extends IID>(owner: Type<T>) {
  class Like extends OwnerEntity(owner) implements ILike<T> {
    @Column({ type: 'boolean', nullable: true })
    like?: boolean | undefined;
  }

  return Like;
}
