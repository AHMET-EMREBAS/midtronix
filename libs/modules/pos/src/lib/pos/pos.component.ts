import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPriceLevelRaw, ISkuRaw, ISkuViewRaw, IStoreRaw } from '@mdtx/common';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { catchError, debounceTime, forkJoin, of, switchMap, tap } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import {
  StoreSearchComponent,
  PriceLevelSearchComponent,
  SkuSearchComponent,
} from '@mdtx/forms';
@Component({
  selector: 'mdtx-pos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    StoreSearchComponent,
    PriceLevelSearchComponent,
    SkuSearchComponent,
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
})
export class PosComponent {
  __items = new Map<string, ISkuViewRaw>();
  barcodeControl = new FormControl('', []);

  storeControl = new FormControl<IStoreRaw | null>(null, []);
  priceLevelControl = new FormControl<IPriceLevelRaw | null>(null, []);
  skuControl = new FormControl<ISkuRaw | null>(null, []);

  barcodeInputEvent$ = this.barcodeControl.valueChanges.pipe(
    debounceTime(1000),
    switchMap((barcodeValue) => {
      const storeId = this.storeControl.value?.id;
      const priceLevelId = this.priceLevelControl.value?.id;

      if (barcodeValue && storeId && priceLevelId) {
        return this.findItem(storeId, priceLevelId, barcodeValue).pipe(
          tap((data: ISkuViewRaw) => {
            const found = this.__items.get(data.barcode);
            if (found) {
              this.updateQuantity(found.quantity + 1, found);
            } else {
              this.setItemToCart({
                ...data,
                quantity: 1,
                total: parseFloat(data.price + ''),
              });
            }
            this.clearBarcodeField();
          }),
          catchError(() => {
            return of(null);
          })
        );
      }
      return of(null);
    })
  );

  priceLevelInputEvent$ = this.priceLevelControl.valueChanges.pipe(
    debounceTime(1000),
    switchMap((priceLevel) => {
      const items = this.getItems();
      const storeId = this.storeControl.value?.id;
      const priceLevelId = priceLevel?.id;

      if (items.length > 0 && storeId && priceLevelId) {
        return forkJoin(
          items.map((e) => {
            return this.findItem(storeId, priceLevelId, e.barcode).pipe(
              tap((data) => {
                this.setItemToCart({
                  ...data,
                  quantity: e.quantity,
                  total: data.price * e.quantity,
                });
              })
            );
          })
        );
      }

      return of(null);
    })
  );

  constructor(protected readonly httpClient: HttpClient) {}

  getItems(): ISkuViewRaw[] {
    return [...this.__items.entries()].map(([, value]) => value);
  }

  setItemToCart(data: ISkuViewRaw) {
    this.__items.set(data.barcode, data);
  }

  clearBarcodeField() {
    this.barcodeControl.setValue('');
  }

  findItem(storeId: number, priceLevelId: number, barcodeValue: string) {
    return this.httpClient
      .get<ISkuViewRaw>(
        `api/skuview/?storeId=${storeId}&priceLevelId=${priceLevelId}&barcode=${barcodeValue}`
      )
      .pipe(debounceTime(1000));
  }

  getTotal() {
    const items = this.getItems().filter((e) => e.total);
    if (items.length == 0) return 0.0;

    return items
      .map((e) => e.total ?? 0)
      .reduce((p, c) => {
        return p + c;
      });
  }

  updateQuantity(quantity: number, data: ISkuViewRaw) {
    console.log('Uupdating value');
    const total = quantity * data.price;
    this.setItemToCart({ ...data, quantity, total });
  }
}
