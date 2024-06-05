export interface AuthRole {
  id: number;
  name: string;
}

export interface AuthCredentials {
  id: number;
  username: string;
  password: string;
  roles: AuthRole[];
}
