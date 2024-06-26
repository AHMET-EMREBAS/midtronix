import { IID, IImage, IOwner, IVideo } from '@mdtx/common';
import { Column, Type } from '@mdtx/core';
import { OwnerEntity } from './__base';

/**
 * Create image entity for the owner
 * @param owner entity
 * @returns
 * @param name
 * @param url
 */
export function ImageEntity<T extends IID>(owner: Type<T>) {
  class Image extends OwnerEntity(owner) implements IImage<T>, IOwner<T> {
    @Column({ type: 'varchar', nullable: true }) name!: string;
    @Column({ type: 'varchar', nullable: true }) url!: string;
  }
  return Image;
}

/**
 * Create video entity for the owner
 * @param owner entity
 * @returns
 * @param name
 * @param url
 */
export function VideoEntity<T extends IID>(owner: Type<T>) {
  class Video extends OwnerEntity(owner) implements IVideo<T>, IOwner<T> {
    @Column({ type: 'varchar', nullable: true }) name!: string;
    @Column({ type: 'varchar', nullable: true }) url!: string;
  }
  return Video;
}
