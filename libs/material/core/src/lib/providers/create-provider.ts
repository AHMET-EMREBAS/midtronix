import { Inject, InjectionToken, Provider, Type } from '@angular/core';

export type CreateProviderResult<T> = {
  provideFn: (value: T) => Provider;
  injectFn: () => ParameterDecorator;
  tokenFn: () => InjectionToken<T>;
};

/**
 * Create class provider, injector, and getToken function for a resource
 * @param tokenPrefix
 * @returns
 */
export function createClassProvider<T>(
  tokenPrefix: string
): CreateProviderResult<Type<T>> {
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

export function createValueProvider<T>(
  tokenPrefix: string
): CreateProviderResult<T> {
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
