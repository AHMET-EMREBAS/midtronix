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
        valueProvider.provide('value-test-value'),
        classProvider.provide(TestClass),
      ],
    }).compile();
  });

  it('should provide the classes', () => {
    const testClass = context.get<TestClass>(classProvider.token());
    expect(testClass.value).toBe('class-test-value');
  });

  it('should provide the values', () => {
    const testValue = context.get<string>(valueProvider.token());
    expect(testValue).toBe('value-test-value');
  });
});
