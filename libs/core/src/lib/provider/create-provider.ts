import { Inject, Provider, Type } from '@nestjs/common';
import { CreateProviderResult } from '@mdtx/common';
import { v4 } from 'uuid';
/**
 * Create class provider, injector, and getToken function for a resource
 * @param tokenPrefix
 * @returns
 */
export function createClassProvider<T>(
  tokenPrefix: string
): CreateProviderResult<Type<T>, Provider, string> {
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
): CreateProviderResult<T, Provider, string> {
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
