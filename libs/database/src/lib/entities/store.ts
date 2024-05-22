import { IStore } from '@mdtx/common';
import { Entity, Type } from '@mdtx/core';
import { DescriptionEntity } from './__base';
import { AddressEntity, EmailEntity, PhoneEntity } from './__factory';

@Entity()
export class Store extends DescriptionEntity implements IStore {}

@Entity()
export class StoreAddress extends AddressEntity(Store) {}

@Entity()
export class StorePhone extends PhoneEntity(Store) {}

@Entity()
export class StoreEmail extends EmailEntity(Store) {}
