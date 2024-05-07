import { IID, IImage, IOwner, IVideo } from '@mdtx/common';
import { Column, Type } from '@mdtx/core';
import { OwnerEntity } from './__base';

export function ImageEntity<T extends IID>(owner: Type<T>) {
  class Image extends OwnerEntity(owner) implements IImage<T>, IOwner<T> {
    @Column({ type: 'varchar' }) name!: string;
    @Column({ type: 'varchar' }) url!: string;
  }
  return Image;
}

export function VideoEntity<T extends IID>(owner: Type<T>) {
  class Video extends OwnerEntity(owner) implements IVideo<T>, IOwner<T> {
    @Column({ type: 'varchar' }) name!: string;
    @Column({ type: 'varchar' }) url!: string;
  }
  return Video;
}
