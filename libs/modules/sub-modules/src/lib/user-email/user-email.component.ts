import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-user-email',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './user-email.component.html',
  styleUrl: './user-email.component.scss',
})
export class UserEmailComponent {}
