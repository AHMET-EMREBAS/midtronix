import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  Validate,
} from 'class-validator';

export enum __CVO {
  MORE_THAN = 'moreThan',
  LESS_THAN = 'lessThan',
  MORE_THAN_OR_EQUAL = 'moreThanOrEqual',
  LESS_THAN_OR_EQUAL = 'lessThanOrEqual',
}

@ValidatorConstraint({ name: 'comparison', async: false })
export class ___ComparisonValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const otherPropertyName = args.constraints[0];
    const otherPropertyValue = (args.object as any)[otherPropertyName];
    const operator = args.constraints[1];

    switch (operator) {
      case __CVO.MORE_THAN:
        return value > otherPropertyValue;
      case __CVO.LESS_THAN:
        return value < otherPropertyValue;
      case __CVO.MORE_THAN_OR_EQUAL:
        return value >= otherPropertyValue;
      case __CVO.LESS_THAN_OR_EQUAL:
        return value <= otherPropertyValue;
      default:
        return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    const otherPropertyName = args.constraints[0];
    return `${args.property} must be ${args.constraints[1]} ${otherPropertyName}`;
  }
}

/**
 * Compare the value with the other property value
 * @param propertyName
 * @returns
 */
export function IsMoreThan(propertyName: string) {
  return Validate(___ComparisonValidator, [propertyName, __CVO.MORE_THAN]);
}

/**
 * Compare the value with the other property value
 * @param propertyName
 * @returns
 */
export function IsMoreThanOrEqual(propertyName: string) {
  return Validate(___ComparisonValidator, [
    propertyName,
    __CVO.MORE_THAN_OR_EQUAL,
  ]);
}

/**
 * Compare the value with the other property value
 * @param propertyName
 * @returns
 */
export function IsLessThan(propertyName: string) {
  return Validate(___ComparisonValidator, [propertyName, __CVO.LESS_THAN]);
}

/**
 * Compare the value with the other property value
 * @param propertyName
 * @returns
 */
export function IsLessThanOrEqual(propertyName: string) {
  return Validate(___ComparisonValidator, [
    propertyName,
    __CVO.LESS_THAN_OR_EQUAL,
  ]);
}
