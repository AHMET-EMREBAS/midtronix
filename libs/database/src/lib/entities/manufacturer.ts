import { IManufacturer } from '@mdtx/common';
import { Entity } from '@mdtx/core';
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
export class ManufactorerDetail extends UserDetailEntity(Manufacturer) {}

@Entity()
export class ManufactorerAddress extends AddressEntity(Manufacturer) {}

@Entity()
export class ManufactorerPhone extends PhoneEntity(Manufacturer) {}

@Entity()
export class ManufactorerEmail extends EmailEntity(Manufacturer) {}
