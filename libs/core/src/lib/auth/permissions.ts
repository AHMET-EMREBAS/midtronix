import { CustomDecorator } from '@nestjs/common';
import { createMetadata } from '../metadata';
import { ResourceActions } from '@mdtx/common';


// Is public, permission, role, scope, resoucename

export const PublicMetadata = createMetadata('IsPublic');
export const ResourceNameMeta = createMetadata('ResourceName');
export const RoleMeta = createMetadata('RequiredRole');
export const PermissionMeta = createMetadata('RequiredPermission');
export const ScopeMeta = createMetadata('RequiredScope');
export const AppMeta = createMetadata('RequiredApp');

export function PublicResource() {
  return PublicMetadata.set(true);
}

export function RequiredRole(roleName: string) {
  return RoleMeta.set(roleName);
}

export function RequiredPermission(permissionName: string) {
  return PermissionMeta.set(permissionName);
}

export function createPermissionString(
  action: ResourceActions,
  resourceName: string
) {
  return `${action}:${resourceName}`;
}

export type ResourcePermissions = {
  CanRead: () => CustomDecorator;
  CanWrite: () => CustomDecorator;
  CanUpdate: () => CustomDecorator;
  CanDelete: () => CustomDecorator;
  CanManage: () => CustomDecorator;
};

export type RawPermissions = {
  READ: string;
  WRITE: string;
  UPDATE: string;
  DELETE: string;
  MANAGE: string;
};

export function createRawPermissions(resourceName: string): RawPermissions {
  return {
    DELETE: createPermissionString(ResourceActions.DELETE, resourceName),
    MANAGE: createPermissionString(ResourceActions.MANAGE, resourceName),
    READ: createPermissionString(ResourceActions.READ, resourceName),
    UPDATE: createPermissionString(ResourceActions.UPDATE, resourceName),
    WRITE: createPermissionString(ResourceActions.WRITE, resourceName),
  };
}

export class PermissionBuilder {
  private readonly resoucePermissions: ResourcePermissions;
  private readonly rawPermissions: RawPermissions;
  private constructor(protected readonly resourceName: string) {
    this.rawPermissions = createRawPermissions(resourceName);
    this.resoucePermissions = {
      CanDelete: () => PermissionMeta.set(this.rawPermissions.DELETE),
      CanManage: () => PermissionMeta.set(this.rawPermissions.MANAGE),
      CanRead: () => PermissionMeta.set(this.rawPermissions.READ),
      CanUpdate: () => PermissionMeta.set(this.rawPermissions.UPDATE),
      CanWrite: () => PermissionMeta.set(this.rawPermissions.WRITE),
    };
  }

  static get(resourceName: string): ResourcePermissions {
    return new PermissionBuilder(resourceName).resoucePermissions;
  }

  static raw(resourceName: string): RawPermissions {
    return createRawPermissions(resourceName);
  }
}
