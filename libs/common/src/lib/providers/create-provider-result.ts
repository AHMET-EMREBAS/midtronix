export type CreateProviderResult<Provided, Provider, Token> = {
  provide: (value: Provided) => Provider;
  inject: () => ParameterDecorator;
  token: () => Token;
};
