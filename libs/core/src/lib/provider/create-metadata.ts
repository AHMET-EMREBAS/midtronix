import {
  CustomDecorator,
  ExecutionContext,
  Reflector,
  v4,
  SetMetadata,
} from '../__external';

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
