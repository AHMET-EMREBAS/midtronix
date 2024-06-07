import { Inject, InjectionToken, Provider, Type } from '@angular/core';

export interface CreateClassProviderResult<T> {
  provide(value: T): Provider;
  inject(): PropertyDecorator;
  token(): InjectionToken<T>;
}

/**
 * Create a class provider, injector, and token function
 * @param tokenPrefix
 * @returns
 */
export function createClassProvider<T>(
  tokenPrefix: string
): CreateClassProviderResult<Type<T>> {
  const token = new InjectionToken<T>(tokenPrefix);
  return {
    provide(value: Type<T>) {
      return {
        provide: token,
        useClass: value,
      };
    },
    inject() {
      return Inject(token);
    },
    token() {
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
): CreateClassProviderResult<T> {
  const token = new InjectionToken<T>(tokenPrefix);
  return {
    provide<T>(value: T) {
      return {
        provide: token,
        useValue: value,
      };
    },
    inject() {
      return Inject(token);
    },
    token() {
      return token;
    },
  };
}
