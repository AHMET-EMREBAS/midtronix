import { Provider } from '@angular/core';
import { FormGroup } from '@angular/forms';

export function provideFormGroup(useValue: FormGroup): Provider {
  return {
    provide: FormGroup,
    useValue,
  };
}
