import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SampleLayoutComponent } from '@mdtx/material/layout';
@Component({
  standalone: true,
  imports: [RouterModule, SampleLayoutComponent],
  selector: 'mdtx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
