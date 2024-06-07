import { Inject, Provider, Type } from '@nestjs/common';
import { v4 } from 'uuid';

export type CreteProviderResult<T> = {
  token(): string;
  provide(useClass: T): Provider;
  inject(): PropertyDecorator;
};

export function createClassProvider<T>(
  prefix: string
): CreteProviderResult<Type<T>> {
  const token = prefix + v4();
  return {
    token() {
      return token;
    },

    inject() {
      return Inject(token);
    },
    provide(useClass: Type<T>) {
      return {
        provide: token,
        useClass,
      };
    },
  };
}
export function createValueProvider<T>(prefix: string): CreteProviderResult<T> {
  const token = prefix + v4();
  return {
    token() {
      return token;
    },

    inject() {
      return Inject(token);
    },
    provide(useValue: T) {
      return {
        provide: token,
        useValue,
      };
    },
  };
}
