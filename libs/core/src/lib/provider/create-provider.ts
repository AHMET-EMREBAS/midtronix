import { Inject, Provider, Type } from '@nestjs/common';
import { v4 } from 'uuid';

export type CreateProviderResult<T> = {
  provideFn: (value: T) => Provider;
  injectFn: () => ParameterDecorator;
  tokenFn: () => string;
};

/**
 * Create class provider, injector, and getToken function for a resource
 * @param tokenPrefix
 * @returns
 */
export function createClassProvider<T>(
  tokenPrefix: string
): CreateProviderResult<Type<T>> {
  const token = tokenPrefix + v4();
  return {
    provideFn(value: Type<T>) {
      return {
        provide: token,
        useClass: value,
      };
    },
    injectFn() {
      return Inject(token);
    },
    tokenFn() {
      return token;
    },
  };
}

export function createValueProvider<T>(
  tokenPrefix: string
): CreateProviderResult<T> {
  const token = tokenPrefix + v4();
  return {
    provideFn(value: T) {
      return {
        provide: token,
        useValue: value,
      };
    },
    injectFn() {
      return Inject(token);
    },
    tokenFn() {
      return token;
    },
  };
}
