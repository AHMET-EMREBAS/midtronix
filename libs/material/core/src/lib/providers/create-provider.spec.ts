import { createClassProvider, createValueProvider } from './create-provider';

import { TestBed } from '@angular/core/testing';

class TestClass {
  value = 'class-test-value';
}
const valueProvider = createValueProvider<string>('token-prefix-value');
const classProvider = createClassProvider<TestClass>('token-prefix-class');

describe('Create Provider', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        valueProvider.provideFn('value-test-value'),
        classProvider.provideFn(TestClass),
      ],
    }).compileComponents();
  });

  it('should provide the classes', () => {
    expect(TestBed.inject<TestClass>(classProvider.tokenFn()).value).toBe(
      'class-test-value'
    );
  });

  it('should provide the values', () => {
    expect(TestBed.inject<string>(valueProvider.tokenFn())).toBe(
      'value-test-value'
    );
  });
});
