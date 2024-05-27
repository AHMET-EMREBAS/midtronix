import { AsyncPipe, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { InputAutocompleteComponent } from '@mdtx/material/form';
import { SkuService } from '@mdtx/ngrx';
import { FormControl } from '@angular/forms';
import { ISku, ISkuRaw } from '@mdtx/common';
import { IInputOption } from '@mdtx/material/core';
import {
  Observable,
  Subscription,
  debounceTime,
  firstValueFrom,
  map,
} from 'rxjs';

@Component({
  selector: 'mdtx-sku-search',
  standalone: true,
  imports: [NgIf, AsyncPipe, InputAutocompleteComponent],
  template: `
    <mdtx-input-autocomplete
      *ngIf="options"
      #inputRef
      [options]="options"
      inputName="sku"
      label="Search Sku"
      prefixIcon="search"
      [inputControl]="inputControl"
      [multiple]="multiple"
      (openedEvent)="handleOpenedEvent()"
    ></mdtx-input-autocomplete>
  `,
  providers: [SkuService],
})
export class SkuSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() options?: IInputOption[];
  @Input() inputControl = new FormControl<ISku | null>(null, []);
  @Input() multiple = false;
  @Input() defaultPriceLevel?: ISku;

  @Output() changeEvent = new EventEmitter<ISku>();

  sub!: Subscription;
  constructor(protected readonly service: SkuService) {}

  ngOnInit(): void {
    if (this.defaultPriceLevel) {
      this.inputControl.setValue(this.defaultPriceLevel);
    }
  }

  async ngAfterViewInit() {
    if (!this.options) {
      this.options = await firstValueFrom(this.service.asOptions$);
    }

    this.sub = this.inputControl.valueChanges
      .pipe(debounceTime(600))
      .subscribe((data) => {
        if (data) {
          this.changeEvent.emit(data);
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleOpenedEvent() {
    this.changeEvent.emit();
  }
}
