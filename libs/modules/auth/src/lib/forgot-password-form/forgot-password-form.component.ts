import { Component } from '@angular/core';
import { CommonFormModule } from '@mdtx/material/form';

@Component({
  selector: 'mdtx-forgot-password-form',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss',
})
export class ForgotPasswordFormComponent {}
