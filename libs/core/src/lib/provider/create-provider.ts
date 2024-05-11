import { CreateProviderResult } from '@mdtx/common';
import { Inject, Provider, Type, v4 } from './../__external';

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

export function createValueProvider<T>(
  tokenPrefix: string
): CreateProviderResult<T, Provider, string> {
  const token = tokenPrefix + v4();
  return {
    provide(value: T) {
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
