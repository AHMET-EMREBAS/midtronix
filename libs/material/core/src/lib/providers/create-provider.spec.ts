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
        valueProvider.provide('value-test-value'),
        classProvider.provide(TestClass),
      ],
    }).compileComponents();
  });

  it('should provide the classes', () => {
    expect(TestBed.inject<TestClass>(classProvider.token()).value).toBe(
      'class-test-value'
    );
  });

  it('should provide the values', () => {
    expect(TestBed.inject<string>(valueProvider.token())).toBe(
      'value-test-value'
    );
  });
});
