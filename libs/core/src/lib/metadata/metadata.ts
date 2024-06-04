import { CustomDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { v4 } from 'uuid';

export type MetadataHandlers<T> = {
  set: (value?: T) => CustomDecorator;
  get: (context: ExecutionContext, reflector: Reflector) => T;
  token: () => string;
};

export function createMetadata<T>(prefix: string): MetadataHandlers<T> {
  const token = prefix + v4();
  return {
    set: (value?: T) => {
      return SetMetadata(token, value);
    },
    get: (context: ExecutionContext, reflector: Reflector) => {
      return reflector.getAllAndOverride(token, [
        context.getClass(),
        context.getHandler(),
      ]);
    },
    token: () => token,
  };
}
