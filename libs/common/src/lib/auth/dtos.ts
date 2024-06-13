export interface IForgotPasswordDto {
  username: string;
}

export interface IUpdatePasswordDto {
  username: string;
  password: string;
  newPassword: string;
}

export interface ILoginWithSSODto {
  username: string;
  sso: string;
}

export interface ILoginDto {
  username: string;
  password: string;
}
