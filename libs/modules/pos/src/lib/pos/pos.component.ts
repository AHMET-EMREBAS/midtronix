import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, merge, tap } from 'rxjs';
import {
  CustomerSearchComponent,
  PriceLevelSearchComponent,
  StoreSearchComponent,
} from '@mdtx/forms';
import {
  CartService,
  OrderService,
  OrderViewService,
  SkuViewService,
} from '@mdtx/ngrx';

const DEBOUNCE_TIME = 600;

@Component({
  selector: 'mdtx-pos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    StoreSearchComponent,
    PriceLevelSearchComponent,
    CustomerSearchComponent,
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
  providers: [SkuViewService, CartService, OrderService, OrderViewService],
})
export class PosComponent implements AfterViewInit {
  @ViewChild('messagesContainer')
  messagesContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('storeSearch') storeSearch!: StoreSearchComponent;
  @ViewChild('priceLevelSearch') priceLevelSearch!: StoreSearchComponent;
  @ViewChild('customerSearch') customerSearch!: StoreSearchComponent;

  products$ = this.skuViewService.entities$.pipe(
    debounceTime(600),
    tap((data) => {
      console.log(data);
    })
  );

  readonly messages: string[] = [];

  scanControl = new FormControl('');

  constructor(
    protected readonly skuViewService: SkuViewService,
    protected readonly cartService: CartService
  ) {}

  ngAfterViewInit(): void {
    merge(
      this.storeSearch.inputControl.valueChanges.pipe(
        debounceTime(DEBOUNCE_TIME)
      ),
      this.priceLevelSearch.inputControl.valueChanges.pipe(
        debounceTime(DEBOUNCE_TIME)
      ),
      this.customerSearch.inputControl.valueChanges.pipe(
        debounceTime(DEBOUNCE_TIME)
      ),
      this.scanControl.valueChanges.pipe(debounceTime(DEBOUNCE_TIME))
    ).subscribe((search) => {
      console.log('? : ', search);
      this.log(`Scaning by ${search}`);
    });

    this.skuViewService.getWithQuery({ take: 10000 });
  }

  log(msg: string) {
    this.messages.unshift(msg);
    this.messagesContainer.nativeElement.scrollBy({
      behavior: 'smooth',
      top: 10000,
    });
  }
}
