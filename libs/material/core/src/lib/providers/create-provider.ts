import {
  Inject,
  InjectionToken,
  InjectorType,
  Provider,
  Type,
} from '@angular/core';
import { CreateProviderResult } from '@mdtx/common';

/**
 * Create a class provider, injector, and token function
 * @param tokenPrefix
 * @returns
 */
export function createClassProvider<T>(
  tokenPrefix: string
): CreateProviderResult<Type<T>, Provider, InjectionToken<T>> {
  const token = new InjectionToken<T>(tokenPrefix);
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

/**
 * Create a value provider, injector, and token function
 * @param tokenPrefix
 * @returns
 */
export function createValueProvider<T>(
  tokenPrefix: string
): CreateProviderResult<T, Provider, InjectionToken<T>> {
  const token = new InjectionToken<T>(tokenPrefix);
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
