import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-customer-email',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './customer-email.component.html',
  styleUrl: './customer-email.component.scss',
})
export class CustomerEmailComponent {}
