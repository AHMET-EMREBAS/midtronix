export class MessageResponse {
  message!: string;
}

export class IContraintsResponse {}

export interface IInputValidationResponse {
  property: string;
  constraints: IContraintsResponse;
}

export interface IInputValidationResponses {
  message?: string;
  errors?: IInputValidationResponse[];
}
