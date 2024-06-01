export type CreateProviderResult<Provided, Provider, Token> = {
  provide<T extends Provided>(value: T): Provider;
  inject: () => ParameterDecorator;
  token: () => Token;
};
