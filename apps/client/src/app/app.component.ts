import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Title } from '@angular/platform-browser';
import { AppMessages } from './app.messages';


@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIconModule, MatDividerModule],
  selector: 'mdtx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(public readonly title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(AppMessages.WELCOME);
  }
}
