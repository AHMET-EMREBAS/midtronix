import { IMessageResponse } from '../response';

export interface ILoginResponse {
  accesstoken: string;
}

export type IForgotPasswordResponse = IMessageResponse;
export type ILogoutResponse = IMessageResponse;
export type IUpdatePasswordResponse = IMessageResponse;
