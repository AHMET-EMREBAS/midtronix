import {
  ICreateAddressDto,
  ICreateCredentialDto,
  ICreateEmailDto,
  ICreateOwnerDto,
  ICreatePermissionDto,
  ICreatePhoneDto,
  ICreateRoleDto,
  ICreateUserDetailDto,
  IDescription,
  IID,
  IName,
} from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

@Exclude()
export class CreateOwnerDto implements ICreateOwnerDto {
  @IDObjectProperty({ required: true })
  owner!: IID;
}

@Exclude()
export class CreateNameDto implements Pick<IName, 'name'> {
  @Property({
    type: 'string',
    required: true,
    minLength: 3,
    maxLength: 50,
    description: 'Entity name property',
    example: 'Some name',
  })
  name!: string;
}

@Exclude()
export class CreateDescriptionDto
  extends CreateNameDto
  implements Pick<IDescription, 'name'>
{
  @Property({ type: 'string', maxLength: 500 })
  description?: string;
}

@Exclude()
export class CreateCredentialsDto implements ICreateCredentialDto {
  @Property({ type: 'string', required: true, format: 'password' })
  password!: string;

  @Property({ type: 'string', required: true, format: 'email' })
  username!: string;
}

@Exclude()
export class CreateUseDetailDto
  extends CreateOwnerDto
  implements ICreateUserDetailDto
{
  @Property({ type: 'string', minLength: 3, maxLength: 50, required: true })
  firstName?: string;

  @Property({ type: 'string', minLength: 3, maxLength: 50, required: true })
  lastName?: string;

  @Property({ type: 'string', minLength: 3, maxLength: 50 })
  middleName?: string;

  @Property({ type: 'string', minLength: 3, maxLength: 50, required: true })
  dob?: Date;

  @Property({ type: 'string', minLength: 3, maxLength: 50 })
  ssn?: string;

  @Property({ type: 'string', minLength: 3, maxLength: 50 })
  dl?: string;
}

@Exclude()
export class CreateAddressDto
  extends CreateOwnerDto
  implements ICreateAddressDto
{
  @Property({ type: 'string', required: true }) street!: string;
  @Property({ type: 'string', required: true }) city!: string;
  @Property({ type: 'string', required: true }) state!: string;
  @Property({ type: 'string', required: true }) zip!: string;
}

@Exclude()
export class CreateEmailDto extends CreateOwnerDto implements ICreateEmailDto {
  @Property({ type: 'string', format: 'email', required: true })
  email!: string;
}

@Exclude()
export class CreatePhoneDto extends CreateOwnerDto implements ICreatePhoneDto {
  @Property({ type: 'string', format: 'phone', required: true })
  phone!: string;
}

@Exclude()
export class CreatePermissionDto
  extends CreateNameDto
  implements ICreatePermissionDto {}

@Exclude()
export class CreateRoleDto extends CreateNameDto implements ICreateRoleDto {
  @IDObjectProperty() permissions?: IID[];
}

@Exclude()
export class UpdateEmailDto extends PartialType(CreateEmailDto) {}

@Exclude()
export class UpdatePhoneDto extends PartialType(CreatePhoneDto) {}

@Exclude()
export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}

@Exclude()
export class UpdateRoleDto extends PartialType(CreateRoleDto) {}

@Exclude()
export class UpdateUseDetailDto extends PartialType(CreateUseDetailDto) {}
