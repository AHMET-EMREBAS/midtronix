import { Provider } from '@angular/core';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';

export function provideMatFormFieldOptions(
  options?: Partial<MatFormFieldDefaultOptions>
): Provider {
  return {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline',
      color: 'primary',
      hideRequiredMarker: true,
      ...options,
    } as MatFormFieldDefaultOptions,
  };
}
