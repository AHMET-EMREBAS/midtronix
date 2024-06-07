import {
  IInputValidationResponses,
  IInputValidationResponse,
  IContraintsResponse,
} from '@mdtx/common';
import { Property } from '../property';

export class MessageResponse {
  @Property({ type: 'string' })
  message!: string;
}

class ContraintsResponse {}

class InputValidationResponse implements IInputValidationResponse {
  @Property({ type: 'string' })
  property!: string;

  @Property({ type: 'object', target: ContraintsResponse })
  constraints!: IContraintsResponse;
}

export class InputValidationResponses implements IInputValidationResponses {
  @Property({ type: 'string' })
  message!: string;

  @Property({ type: 'object', target: InputValidationResponse, isArray: true })
  errors!: InputValidationResponse[];
}

export class CountResponse {
  @Property({ type: 'number' })
  count!: number;
}

export class NotFoundErrorResponse extends MessageResponse {}

export class InternalServerErrorResponse extends MessageResponse {}
