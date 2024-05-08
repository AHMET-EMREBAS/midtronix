/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mdtx-website',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss',
})
export class WebsiteComponent {}
