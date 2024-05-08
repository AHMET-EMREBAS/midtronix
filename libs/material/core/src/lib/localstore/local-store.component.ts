import { Component, OnInit } from '@angular/core';
import { LocalStore } from './local-store';
import { CommonModule } from '@angular/common';

const store = LocalStore.createStore('some', { debounce: 400 });
@Component({
  selector: 'mdtx-local-store',
  imports: [CommonModule],
  standalone: true,
  template: `
    <p>Testing <strong>LocalStore</strong></p>
    <hr />
    <strong>Current Value</strong>: {{ store.$value | async }}
    <hr />
    <button (click)="store.set('Updated Value')">Update Value</button>
  `,
})
export class LocalStoreComponent implements OnInit {
  store!: LocalStore;

  ngOnInit(): void {
    this.store = store;
    this.store.set('Current Value');
  }
}
