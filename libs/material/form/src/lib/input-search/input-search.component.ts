import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonFormModule } from '../form';
import { FormControl } from '@angular/forms';
import { Subscription, debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'mdtx-input-search',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');

  @Output() searchEvent = new EventEmitter<string>();

  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.searchControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchString) => {
        if (searchString) {
          this.searchEvent.emit(searchString);
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
