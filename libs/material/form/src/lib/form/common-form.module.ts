import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ErrorMesssageComponent, InputDirective } from '@mdtx/material/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  InputDirective,
  MatProgressSpinnerModule,
  ErrorMesssageComponent,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class CommonFormModule {}
