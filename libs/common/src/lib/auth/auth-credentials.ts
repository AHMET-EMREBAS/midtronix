export interface AuthPermission {
  id: number;
  name: string;
}

export interface AuthRole {
  id: number;
  name: string;
  permissions: AuthPermission[];
}

export interface AuthCredentials {
  id: number;
  username: string;
  password: string;
  roles: AuthRole[];
}
