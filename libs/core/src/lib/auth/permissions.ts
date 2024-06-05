import { CustomDecorator, ExecutionContext } from '@nestjs/common';
import { createMetadata } from '../metadata';

export enum ResourceActions {
  READ = 'READ',
  WRITE = 'WRITE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  MANAGE = 'MANAGE',
}

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

export class PermissionBuilder {
  private readonly resoucePermissions: ResourcePermissions;
  private constructor(protected readonly resourceName: string) {
    this.resoucePermissions = {
      CanDelete: () =>
        PermissionMeta.set(
          createPermissionString(ResourceActions.DELETE, resourceName)
        ),
      CanManage: () =>
        PermissionMeta.set(
          createPermissionString(ResourceActions.MANAGE, resourceName)
        ),
      CanRead: () =>
        PermissionMeta.set(
          createPermissionString(ResourceActions.READ, resourceName)
        ),
      CanUpdate: () =>
        PermissionMeta.set(
          createPermissionString(ResourceActions.UPDATE, resourceName)
        ),
      CanWrite: () =>
        PermissionMeta.set(
          createPermissionString(ResourceActions.WRITE, resourceName)
        ),
    };
  }

  static get(resourceName: string): ResourcePermissions {
    return new PermissionBuilder(resourceName).resoucePermissions;
  }
}
