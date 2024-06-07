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

class ContraintsResponse implements Partial<IContraintsResponse> {
  isNotEmpty?: string;
  minLength?: string;
  maxLength?: string;
  max?: string;
  min?: string;
  isEmail?: string;
  isUnique?: string;
  isPhone?: string;
  isLength?: string;
}

export class InputValidationError implements IInputValidationResponse {
  @Property({ type: 'string' })
  property!: string;

  @Property({ type: 'object', target: ContraintsResponse })
  constraints!: Partial<IContraintsResponse>;

  constructor(obj: InputValidationError) {
    Object.assign(this, obj);
  }
}

export class UnprocessableEntityResponse implements IInputValidationResponses {
  @Property({ type: 'string', example: 'Invalid input!' })
  message!: string;
  @Property({
    type: 'object',
    target: InputValidationError,
    isArray: true,
    example: [
      {
        property: '(propertyName)',
        constraints: {
          isUnique: '(propertyName) must be unique!',
          minLength:
            '(propertyName) must be longer than or equal to 3 characters',
          maxLength:
            '(propertyName) must be shorter than or equal to 30 characters',
          isEmail: '(propertyName) must be valid email!',
          isStrongPassword: '(propertyName) must be strong password',
        },
      },
      {
        property: '(anotherProperty)',
        constraints: {
          minLength:
            '(anotherProperty) should be longer than or equal to 50 characters!',
        },
      },
    ],
  })
  errors!: InputValidationError[];

  constructor(obj: UnprocessableEntityResponse) {
    Object.assign(this, obj);
  }
}

export class CountResponse {
  @Property({ type: 'number', example: '500' })
  count!: number;
}

export class NotFoundErrorResponse extends MessageResponse {
  @Property({ type: 'string', example: 'Sample Not Found' })
  override message!: string;
}

export class UnauthorizedResponse extends MessageResponse {
  @Property({ type: 'string', example: 'You are not autorized' })
  override message!: string;
}

export class InternalServerErrorResponse extends MessageResponse {
  @Property({
    type: 'string',
    example: 'Sorry, something went wrong. Please, try again.',
  })
  override message!: string;
}
