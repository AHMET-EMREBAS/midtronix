import { IManufacturer } from '@mdtx/common';
import { Entity, Type } from '@mdtx/core';
import { DescriptionEntity } from './__base';
import {
  AddressEntity,
  EmailEntity,
  PhoneEntity,
  UserDetailEntity,
} from './contact';

@Entity()
export class Manufacturer extends DescriptionEntity implements IManufacturer {}

@Entity()
export class ManufacturerDetail extends UserDetailEntity(Manufacturer) {}

@Entity()
export class ManufacturerAddress extends AddressEntity(Manufacturer) {}

@Entity()
export class ManufacturerPhone extends PhoneEntity(Manufacturer) {}

@Entity()
export class ManufacturerEmail extends EmailEntity(Manufacturer) {}
