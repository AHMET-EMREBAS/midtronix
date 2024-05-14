import { FormControl } from '@angular/forms';
import { ValidatorBuilder } from '@mdtx/material/core';

export function NameControl() {
  return new FormControl(
    '',
    new ValidatorBuilder('name').required().minLength(3).maxLength(50).build()
  );
}

export function DescriptionControl() {
  return new FormControl(
    '',
    new ValidatorBuilder('description').maxLength(600).build()
  );
}
