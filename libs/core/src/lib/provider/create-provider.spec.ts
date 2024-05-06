import { createClassProvider, createValueProvider } from './create-provider';

import { TestingModule, Test } from '@nestjs/testing';

class TestClass {
  value = 'class-test-value';
}


describe('Create Provider', () => {
  const valueProvider = createValueProvider('token-prefix');
  const classProvider = createClassProvider('token-prefix');

  let context: TestingModule;

  beforeAll(async () => {
    context = await Test.createTestingModule({
      providers: [
        valueProvider.provideFn('value-test-value'),
        classProvider.provideFn(TestClass),
      ],
    }).compile();
  });

  it('should provide the classes', () => {
    const testClass = context.get<TestClass>(classProvider.tokenFn());
    expect(testClass.value).toBe('class-test-value');
  });

  it('should provide the values', () => {
    const testValue = context.get<string>(valueProvider.tokenFn());
    expect(testValue).toBe('value-test-value');
  });
});
