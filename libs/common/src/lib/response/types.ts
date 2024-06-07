/* eslint-disable @typescript-eslint/no-empty-interface */
export interface IMessageResponse {
  message: string;
}

export interface IContraintsResponse {}

export interface IInputValidationResponse {
  property: string;
  constraints: IContraintsResponse;
}

export interface IInputValidationResponses {
  message?: string;
  errors?: IInputValidationResponse[];
}
