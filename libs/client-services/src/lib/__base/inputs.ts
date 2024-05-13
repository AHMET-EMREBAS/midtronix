import { FormControl } from '@angular/forms';
import { InputValidator } from '@mdtx/material/core';

export function NameControl() {
  return new FormControl(
    '',
    InputValidator.create('name').required().minLength(3).maxLength(50).build()
  );
}

export function DescriptionControl() {
  return new FormControl(
    '',
    InputValidator.create('description').maxLength(600).build()
  );
}
