import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-user-phone',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './user-phone.component.html',
  styleUrl: './user-phone.component.scss',
})
export class UserPhoneComponent {}
