import { ICreateCommentDto } from '@mdtx/common';
import { FormType } from '../__base';
import { FormControl } from '@angular/forms';
import { InputValidator } from '@mdtx/material/core';

export class CommentForm implements FormType<ICreateCommentDto> {
  readonly comment = new FormControl(
    '',
    InputValidator.create('comment').required().build()
  );
  readonly target = new FormControl(
    '',
    InputValidator.create('target').required().build()
  );
  readonly owner = new FormControl(
    '',
    InputValidator.create('owner').required().build()
  );
}
