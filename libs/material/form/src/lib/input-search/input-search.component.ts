import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonFormModule } from '../form';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'mdtx-input-search',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');

  open$ = new BehaviorSubject(false);
  
  closeAfter3000$ = this.open$.pipe(
    debounceTime(400),
    tap(() => {
      this.open$.next(false);
    })
  );
  @Output() searchEvent = new EventEmitter<string>();

  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.searchControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchString) => {
        this.searchEvent.emit(searchString ?? '');
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  openSearch() {
    this.open$.next(true);
  }
}
