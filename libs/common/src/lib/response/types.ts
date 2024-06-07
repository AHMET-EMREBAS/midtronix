/* eslint-disable @typescript-eslint/no-empty-interface */
export interface IMessageResponse {
  message: string;
}

export interface IContraintsResponse {
  isNotEmpty: string;
  minLength: string;
  maxLength: string;
  max: string;
  min: string;
  isEmail: string;
  isUnique: string;
  isPhone: string;
  isLength: string;
}

export interface IInputValidationResponse {
  property: string;
  constraints: Partial<IContraintsResponse>;
}

export interface IInputValidationResponses {
  message?: string;
  errors?: IInputValidationResponse[];
}

export interface ICountResponse {
  count: number;
}
