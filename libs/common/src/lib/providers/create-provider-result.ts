export type CreateProviderResult<Provided, Provider, Token> = {
  provideFn: (value: Provided) => Provider;
  injectFn: () => ParameterDecorator;
  tokenFn: () => Token;
};
